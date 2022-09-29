import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IMyPagePresenterProps {
  UserInfo: never[];
  onClickLogout: () => void;
  onClickPoint: () => void;
  onChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
  selected: string;
}
