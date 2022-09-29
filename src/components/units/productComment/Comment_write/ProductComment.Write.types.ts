import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IProductCommentWriteContainerProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  el: IUseditemQuestion;
}

export interface IProductCommentWritePresenterProps {
  contents: string;
  contentsError: string;
  contentsLength: number;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentWriteButton: () => void;
  isEdit: boolean;
  el: IUseditemQuestion;
  onClickCommentEditButton: () => void;
}
