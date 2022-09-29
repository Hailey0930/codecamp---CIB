import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import BuyListPresenter from "./buyList.presenter";
import { FETCH_USED_ITEMS_I_BOUGHT } from "./buyList.queries";

export default function BuyListContainer() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_I_BOUGHT);

  console.log(data);

  const FetchMoreUseditemsIBought = () => {
    // if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsIBought.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsIBought) {
          return { fetchUseditemsIBought: [...prev.fetchUseditemsIBought] };
        }

        return {
          fetchUseditemsIBought: [
            ...prev.fetchUseditemsIBought,
            ...fetchMoreResult.fetchUseditemsIBought,
          ],
        };
      },
    });
  };

  return (
    <BuyListPresenter
      data={data}
      FetchMoreUseditemsIBought={FetchMoreUseditemsIBought}
    ></BuyListPresenter>
  );
}
