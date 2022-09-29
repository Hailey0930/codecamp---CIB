import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWriteContainerProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
}

export interface IProductWritePresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickWriteButton: (data: any) => void;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onChangeContents: (value: string) => void;
  onClickUpdateButton: (data: any) => void;
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickCloseAddressSearch: () => void;
  isOpen: boolean;
  address: string;
}
