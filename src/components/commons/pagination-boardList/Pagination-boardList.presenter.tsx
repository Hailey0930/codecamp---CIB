import * as S from "../pagination-boardList/Pagination-boardList.styles";
import { IBoardListPaginationUIProps } from "./Pagination-boardList.types";

export default function BoardListPaginationUI(
  props: IBoardListPaginationUIProps
) {
  return (
    <>
      <S.PageMoveButton onClick={props.onClickPrevPage}>{"<"}</S.PageMoveButton>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.PageButton
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activePage}
            >
              {props.startPage + index}
            </S.PageButton>
          )
      )}
      <S.PageMoveButton onClick={props.onClickNextPage}>{">"}</S.PageMoveButton>
    </>
  );
}
