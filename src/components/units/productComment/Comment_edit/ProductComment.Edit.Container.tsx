import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../Comment_list/ProductComment.List.queries";
import ProductCommentEditPresenter from "./ProductComment.Edit.Presenter";
import { DELETE_USED_ITEM_QUESTION } from "./ProductComment.Edit.queries";
import { IProductCommentEditContainerProps } from "./ProductComment.Edit.types";

export default function ProductCommentEditContainer(
  props: IProductCommentEditContainerProps
) {
  const router = useRouter();

  const UserInfo = getUserInfo();

  const [isEdit, setIsEdit] = useState(false);
  const [editContents, setEditContents] = useState("");
  const [editContentsLength, setEditContentsLength] = useState(0);

  const [isReply, setIsReply] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickReply = () => {
    setIsReply(true);
  };

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickDeleteQuestionButton = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });

      message.success("댓글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
    setEditContentsLength(event.target.value.length);
  };

  return (
    <ProductCommentEditPresenter
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      editContents={editContents}
      onClickEdit={onClickEdit}
      onClickDeleteQuestionButton={onClickDeleteQuestionButton}
      onChangeEditContents={onChangeEditContents}
      el={props.el}
      data={props.data}
      UserInfo={UserInfo}
      isReply={isReply}
      setIsReply={setIsReply}
      onClickReply={onClickReply}
    ></ProductCommentEditPresenter>
  );
}
