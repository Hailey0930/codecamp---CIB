import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
  IUpdateUseditemQuestionInput,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../Comment_list/ProductComment.List.queries";
import ProductCommentWritePresenter from "./ProductComment.Write.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductComment.Write.queries";
import { IProductCommentWriteContainerProps } from "./ProductComment.Write.types";

export default function ProductCommentWriteContainer(
  props: IProductCommentWriteContainerProps
) {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [contentsLength, setContentsLength] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    event.target.value
      ? setContentsError("")
      : setContentsError("문의사항을 입력하세요.");
    event.target.value ? setIsActive(true) : setIsActive(false);
    setContentsLength(event.target.value.length);
  };

  const onClickCommentWriteButton = async () => {
    contents
      ? setContentsError("")
      : setContentsError("문의사항을 입력해주세요.");

    if (typeof router.query.productId !== "string") return;
    if (contents) {
      try {
        await createUseditemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents,
            },
            useditemId: router.query.productId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: { useditemId: router.query.productId },
            },
          ],
          // update(cache, { data }) {
          //   cache.modify({
          //     fields: {
          //       fetchUseditemsQuestions: (prev) => {
          //         return [data?.createUseditemQuestion, ...prev];
          //       },
          //     },
          //   });
          // },
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
      setContents("");
    }
  };

  const onClickCommentEditButton = async () => {
    if (!contents) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};
      if (contents) updateUseditemQuestionInput.contents = contents;

      if (typeof props.el?._id !== "string") return;
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      props.setIsEdit?.(false);
      message.success("문의사항이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ProductCommentWritePresenter
      contents={contents}
      contentsError={contentsError}
      contentsLength={contentsLength}
      onChangeContents={onChangeContents}
      onClickCommentWriteButton={onClickCommentWriteButton}
      el={props.el}
      isEdit={props.isEdit}
      onClickCommentEditButton={onClickCommentEditButton}
    ></ProductCommentWritePresenter>
  );
}
