import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import ReplyListPresenter from "./Reply.List.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./Reply.List.queries";
import { IReplyListContainerProps } from "./Reply.List.types";

export default function ReplyListContainer(props: IReplyListContainerProps) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  const FetchMoreQuestionAnswers = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
        useditemQuestionId: props.el?._id,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };

        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <ReplyListPresenter
      data={data}
      FetchMoreQuestionAnswers={FetchMoreQuestionAnswers}
    ></ReplyListPresenter>
  );
}
