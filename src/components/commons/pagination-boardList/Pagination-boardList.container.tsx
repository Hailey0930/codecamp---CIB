import { MouseEvent, useState } from "react";
import BoardListPaginationUI from "./Pagination-boardList.presenter";
import { IBoardListPaginationProps } from "./Pagination-boardList.types";

export default function BoardListPagination(props: IBoardListPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const lastPage = props.BoardsCount ? Math.ceil(props.BoardsCount / 10) : 0;

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivePage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivePage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof Element)) return;
    const activePage = Number(event.target.id);
    setActivePage(activePage);
    props.refetch({ page: activePage });
  };

  return (
    <BoardListPaginationUI
      startPage={startPage}
      lastPage={lastPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
      activePage={activePage}
    ></BoardListPaginationUI>
  );
}
