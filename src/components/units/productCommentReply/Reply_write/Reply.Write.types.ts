import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface IReplyWriteContainerProps {
  el: IUseditemQuestion;
  setIsReply: Dispatch<SetStateAction<boolean>>;
  ReplyEl: IUseditemQuestionAnswer;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
}

export interface IReplyWritePresenterProps {
  contents: String;
  contentsLength: Number;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWriteReply: () => void;
  ReplyEl: IUseditemQuestionAnswer;
  isEdit: boolean;
  onClickEditReply: () => void;
}
