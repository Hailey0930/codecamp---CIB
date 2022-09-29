import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductCommentListContainer {
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IProductCommentListPresenter {
  QuestionsData?: Pick<IQuery, "fetchUseditemQuestions">;
  FetchMoreQuestions: () => void;
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
}
