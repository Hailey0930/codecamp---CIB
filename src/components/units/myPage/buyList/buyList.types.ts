import { IQuery } from "../../../../commons/types/generated/types";

export interface IBuyListPresenterProps {
  data: Pick<IQuery, "fetchUseditemsIBought"> | undefined;
  FetchMoreUseditemsIBought: () => void;
}
