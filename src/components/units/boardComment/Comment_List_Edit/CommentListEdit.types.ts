import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentListEditPresenterProps {
  isOpenDeleteModal?: boolean;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCloseDeleteModal: (event: MouseEvent<HTMLElement>) => void;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  editContents: string;
  onChangeEditContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  el: IBoardComment;
  onClickDeleteCommentButton: (event: MouseEvent<HTMLElement>) => Promise<void>;
  onClickEdit?: () => void;
}
