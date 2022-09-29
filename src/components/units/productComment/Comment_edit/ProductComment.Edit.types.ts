import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

export interface IProductCommentEditContainerProps {
  el: IUseditemQuestion;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface IProductCommentEditPresenterProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  editContents: string;
  onClickEdit: () => void;
  onClickDeleteQuestionButton: (event: MouseEvent<HTMLElement>) => void;
  onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  el: IUseditemQuestion;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  UserInfo: never[];
  isReply: boolean;
  setIsReply: Dispatch<SetStateAction<boolean>>;
  onClickReply: () => void;
}
