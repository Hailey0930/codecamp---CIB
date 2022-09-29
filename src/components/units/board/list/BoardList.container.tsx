import BoardListPresenterPage from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import React, { ChangeEvent, MouseEvent, useState } from "react";

export default function BoardListContainerPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: BoardsCount, refetch: BoardCountRefetch } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const router = useRouter();
  const onClickMoveToCreateBoard = () => {
    router.push(`/boards/freeboard_write`);
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.currentTarget instanceof HTMLDivElement)) return;
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const [search, setSearch] = useState("");

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    refetch({ search, page: 1 });
    BoardCountRefetch({ search });
  };

  return (
    <BoardListPresenterPage
      data={data}
      onClickMoveToCreateBoard={onClickMoveToCreateBoard}
      onClickMoveToDetail={onClickMoveToDetail}
      BoardsCount={BoardsCount?.fetchBoardsCount}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      search={search}
    ></BoardListPresenterPage>
  );
}
