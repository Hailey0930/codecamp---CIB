import * as S from "./Reply.List.styles";
import { IReplyListPresenterProps } from "./Reply.List.types";
import InfiniteScroll from "react-infinite-scroller";
import ReplyEditContainer from "../Reply_Edit/Reply.Edit.Container";

export default function ReplyListPresenter(props: IReplyListPresenterProps) {
  return (
    <>
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={props.FetchMoreQuestionAnswers}
        hasMore={true}
      > */}
      {props.data?.fetchUseditemQuestionAnswers.map((ReplyEl) => (
        <ReplyEditContainer
          key={ReplyEl._id}
          ReplyEl={ReplyEl}
          data={props.data}
        ></ReplyEditContainer>
      ))}
      {/* </InfiniteScroll> */}
    </>
  );
}
