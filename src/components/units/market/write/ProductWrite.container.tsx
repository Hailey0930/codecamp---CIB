import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { useAuth } from "../../../commons/hooks/useAuth";
import ProductWritePresenter from "./ProductWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { schema } from "./ProductWrite.schema";
import { IProductWriteContainerProps } from "./ProductWrite.types";

export default function ProductWriteContainer(
  props: IProductWriteContainerProps
) {
  useAuth();

  useEffect(() => {
    if (props.data !== undefined) {
      reset({
        name: props.data.fetchUseditem.name,
        remarks: props.data.fetchUseditem.remarks,
        contents: props.data.fetchUseditem.contents,
        price: props.data.fetchUseditem.price,
        tags: props.data.fetchUseditem.tags,
        useditemAddress: {
          zipcode: props.data.fetchUseditem.useditemAddress?.zipcode,
          address: props.data.fetchUseditem.useditemAddress?.address,
          addressDetail:
            props.data.fetchUseditem.useditemAddress?.addressDetail,
        },
      });

      if (props.data?.fetchUseditem.images?.length) {
        setFileUrls([...props.data.fetchUseditem.images]);
      }
    }
  }, [props.data]);

  const router = useRouter();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [fileUrls, setFileUrls] = useState(["", ""]);
  const [isOpen, setIsOpen] = useState(false);

  const onClickWriteButton = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: [...fileUrls],
          },
        },
      });
      console.log(result);
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdateButton = async (data: any) => {
    console.log("updateInputs", data);
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateProductInput: IUpdateUseditemInput = {};

    if (isChangedFiles) updateProductInput.images = fileUrls;

    if (!data.name && !data.remarks && !data.contents && !isChangedFiles) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: [...fileUrls],
          },
          useditemId: router.query.productId,
        },
      });
      router.push(`/market/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setValue("useditemAddress.zipcode", data.zonecode);
    setValue("useditemAddress.address", data.address);
    trigger("useditemAddress.zipcode");
    trigger("useditemAddress.address");
    setIsOpen(false);
  };

  const onClickCloseAddressSearch = () => {
    setIsOpen(false);
  };

  return (
    <ProductWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickWriteButton={onClickWriteButton}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeContents={onChangeContents}
      onClickUpdateButton={onClickUpdateButton}
      data={props.data}
      isEdit={props.isEdit}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickCloseAddressSearch={onClickCloseAddressSearch}
      isOpen={isOpen}
      address={getValues("useditemAddress.address")}
    ></ProductWritePresenter>
  );
}
