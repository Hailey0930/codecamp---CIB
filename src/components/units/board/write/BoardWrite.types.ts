import { ChangeEventHandler, MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteContainerProps {
  writerError?: string;
  passwordError?: string;
  titleError?: string;
  contentsError?: string;
  onChangeWriter?: ChangeEventHandler<HTMLInputElement>;
  onChangePassword?: ChangeEventHandler<HTMLInputElement>;
  onChangeTitle?: ChangeEventHandler<HTMLInputElement>;
  onChangeContents?: ChangeEventHandler<HTMLTextAreaElement>;
  onChangeYoutubeUrl?: ChangeEventHandler<HTMLInputElement>;
  onChangeAddressDetail?: ChangeEventHandler<HTMLInputElement>;
  onClickFreeboardMutationPage?: MouseEventHandler<HTMLButtonElement>;
  onClickFreeboardUpdatePage?: MouseEventHandler<HTMLButtonElement>;
  onCompleteAddressSearch?: (data: any) => void;
  onClickAddressSearch?: MouseEventHandler<HTMLButtonElement>;
  onClickCloseAddressSearch?: () => void;
  isActive?: boolean;
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen?: boolean;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  fileUrls?: string[];
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
  onClickCloseAddressSearch?: () => void;
}

export interface IBoardWritePresenterProps {
  writerError?: string;
  passwordError?: string;
  titleError?: string;
  contentsError?: string;
  onChangeWriter?: ChangeEventHandler<HTMLInputElement>;
  onChangePassword?: ChangeEventHandler<HTMLInputElement>;
  onChangeTitle?: ChangeEventHandler<HTMLInputElement>;
  onChangeContents?: ChangeEventHandler<HTMLTextAreaElement>;
  onChangeYoutubeUrl?: ChangeEventHandler<HTMLInputElement>;
  onChangeAddressDetail?: ChangeEventHandler<HTMLInputElement>;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickFreeboardMutationPage?: MouseEventHandler<HTMLButtonElement>;
  onClickFreeboardUpdatePage?: MouseEventHandler<HTMLButtonElement>;
  onCompleteAddressSearch?: (data: any) => void;
  onClickAddressSearch?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen?: boolean;
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  onClickCloseAddressSearch?: () => void;
  fileUrls: string[];
}
