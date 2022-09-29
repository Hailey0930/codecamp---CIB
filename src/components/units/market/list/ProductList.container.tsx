import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import ProductListPresenter from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductListContainer() {
  const router = useRouter();

  const date = new Date();
  const [todays, setTodays] = useState<IUseditem[]>([]);

  const onClickProductWrite = () => {
    router.push("/market/product_write");
  };

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { fetchPolicy: "network-only" });

  const FetchMoreUseditems = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToDetail =
    (today: IUseditem) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/market/${today._id}`);
      const todays = JSON.parse(
        localStorage.getItem(String(getDate(date))) || "[]"
      );

      const temp = todays.filter((el: IUseditem) => el._id === today._id);
      if (temp.length === 1) return;

      const { __typename, ...newToday } = today;
      todays.push(newToday);
      localStorage.setItem(String(getDate(date)), JSON.stringify(todays));
    };

  useEffect(() => {
    const result = JSON.parse(
      localStorage.getItem(String(getDate(date))) || "[]"
    );
    setTodays(result);
  }, []);

  const onClickToday = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event.currentTarget.id}`);
  };

  return (
    <ProductListPresenter
      onClickProductWrite={onClickProductWrite}
      data={data}
      FetchMoreUseditems={FetchMoreUseditems}
      onClickMoveToDetail={onClickMoveToDetail}
      todays={todays}
      onClickToday={onClickToday}
    ></ProductListPresenter>
  );
}
