import * as S from "./ProductComment.List.styles";
import { IProductCommentListPresenter } from "./ProductComment.List.types";
import InfiniteScroll from "react-infinite-scroller";
import ProductCommentEditContainer from "../Comment_edit/ProductComment.Edit.Container";

export default function ProductCommentListPresenter(
  props: IProductCommentListPresenter
) {
  return (
    <>
      <S.CommentsList>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.FetchMoreQuestions}
          hasMore={true}
        >
          {props.QuestionsData?.fetchUseditemQuestions.map((el) => (
            <ProductCommentEditContainer
              key={el._id}
              el={el}
              data={props.data}
            ></ProductCommentEditContainer>
          ))}
        </InfiniteScroll>
      </S.CommentsList>
    </>
  );
}
