import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface ICommentListPresenterProps {
  commentsData?: Pick<IQuery, "fetchBoardComments">;

  FetchMoreComments: () => void;
}

export interface ICommentListEditContainerProps {
  el: IBoardComment;
}
