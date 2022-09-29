import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import ProductCommentListPresenter from "./ProductComment.List.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./ProductComment.List.queries";
import { IProductCommentListContainer } from "./ProductComment.List.types";

export default function ProductCommentListContainer(
  props: IProductCommentListContainer
) {
  const router = useRouter();

  const { data: QuestionsData, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  const FetchMoreQuestions = () => {
    if (!QuestionsData) return;

    fetchMore({
      variables: {
        page: Math.ceil(QuestionsData.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // if (!fetchMoreResult.fetchUseditemQuestions)
        //   return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <ProductCommentListPresenter
      QuestionsData={QuestionsData}
      FetchMoreQuestions={FetchMoreQuestions}
      data={props.data}
    ></ProductCommentListPresenter>
  );
}
