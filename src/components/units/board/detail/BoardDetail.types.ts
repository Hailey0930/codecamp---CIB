import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailPresenterProps {
  boardData?: Pick<IQuery, "fetchBoard">;
  onClickDeleteButton: () => void;
  onClickUpdateButton: () => void;
  onClickMoveToListButton: () => void;

  onClickThumbsUp: () => void;
  onClickThumbsDown: () => void;
}
