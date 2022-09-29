import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface IReplyEditContainerProps {
  ReplyEl: IUseditemQuestionAnswer;
  data: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
}

export interface IReplyEditPresenterProps {
  ReplyEl: IUseditemQuestionAnswer;
  data: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  answerEditContents: string;
  onClickDeleteAnswerButton: () => void;
  onChangeEditAnswer: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickReplyEdit: () => void;
}
