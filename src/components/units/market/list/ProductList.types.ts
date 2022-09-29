import { MouseEvent } from "react";
import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface IProductListPresenterProps {
  onClickProductWrite: () => void;
  data?: Pick<IQuery, "fetchUseditems">;
  FetchMoreUseditems: () => void;
  onClickMoveToDetail: (
    today: IUseditem
  ) => (event: MouseEvent<HTMLDivElement>) => void;
  todays: IUseditem[];
  onClickToday: (event: MouseEvent<HTMLDivElement>) => void;
}
