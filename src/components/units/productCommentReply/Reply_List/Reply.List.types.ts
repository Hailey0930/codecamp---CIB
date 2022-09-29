import {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

export interface IReplyListContainerProps {
  el: IUseditemQuestion;
}

export interface IReplyListPresenterProps {
  data: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
  FetchMoreQuestionAnswers: () => void;
}
