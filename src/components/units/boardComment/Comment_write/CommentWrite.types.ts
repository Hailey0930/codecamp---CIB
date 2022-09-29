import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWritePresenterProps {
  writer?: string;
  password?: string;
  contents?: string;
  rating?: number;
  setRating?: Dispatch<SetStateAction<number>>;

  writerError?: string;
  passwordError?: string;
  contentsError?: string;
  contentsLength?: number;

  onChangeWriter?: ChangeEventHandler<HTMLInputElement>;
  onChangePassword?: ChangeEventHandler<HTMLInputElement>;
  onChangeContents?: ChangeEventHandler<HTMLTextAreaElement>;

  onClickCreateCommentButton: () => void;

  isEdit?: boolean;
  setIsEdit?: boolean;
  el: IBoardComment;

  onClickCommentsEditButton: () => void;
}

export interface ICommentWriteContainerProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el: IBoardComment;
}
