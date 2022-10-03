import InfiniteScroll from "react-infinite-scroller";
import * as S from "../Comment_List/CommentList.styles";
import CommentListEditContainer from "../Comment_List_Edit/CommentListEdit.container";
import { ICommentListPresenterProps } from "./CommentList.types";

export default function CommentListPresenter(
  props: ICommentListPresenterProps
) {
  return (
    <>
      <S.CommentsList>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreComments}
          hasMore={true}
        >
          {props.commentsData?.fetchBoardComments.map((el) => (
            <CommentListEditContainer
              key={el._id}
              el={el}
            ></CommentListEditContainer>
          ))}
        </InfiniteScroll>
      </S.CommentsList>
    </>
  );
}
