import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useAuth } from "../../../commons/hooks/useAuth";
import ProductDetailPresenter from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";


export default function ProductDetailContainer() {
  useAuth();

  const UserInfo = getUserInfo();

  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.productId),
    },
  });

  const [deleteUseditem] =
    useMutation<Pick<IMutation, "deleteUseditem">>(DELETE_USED_ITEM);

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const onClickList = () => {
    router.push("/market");
  };

  const onClickUpdateButton = () => {
    router.push(`/market/${router.query.productId}/product_edit`);
  };

  const onClickBuyButton = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.productId) },
      });
      Modal.success({
        content: `${data?.fetchUseditem.name} 구매가 완료되었습니다.`,
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDeleteButton = async () => {
    try {
      const result = await deleteUseditem({
        variables: { useditemId: router.query.productId },
      });
      message.success(`${data?.fetchUseditem.name} 삭제가 완료되었습니다.`);
      router.push(`/market`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.productId },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductDetailPresenter
        data={data}
        onClickList={onClickList}
        onClickUpdateButton={onClickUpdateButton}
        onClickBuyButton={onClickBuyButton}
        onClickDeleteButton={onClickDeleteButton}
        UserInfo={UserInfo}
        onClickPick={onClickPick}
      ></ProductDetailPresenter>
    </>
  );
}
