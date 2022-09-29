import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailPresenterProps {
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickList: () => void;
  onClickUpdateButton: () => void;
  onClickBuyButton: () => void;
  onClickDeleteButton: () => void;
  UserInfo: never[];
  onClickPick: () => void;
}
