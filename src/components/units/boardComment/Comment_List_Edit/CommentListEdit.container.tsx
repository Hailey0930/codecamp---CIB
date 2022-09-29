import CommentListEditPresenter from "./CommentListEdit.presenter";
import { useRouter } from "next/router";
import { DELETE_BOARD_COMMENT } from "./CommentListEdit.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../Comment_List/CommentList.queries";
import { message, Modal } from "antd";
import { ICommentListEditContainerProps } from "../Comment_List/CommentList.types";

export default function CommentListEditContainer(
  props: ICommentListEditContainerProps
) {
  // 댓글 수정 state
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  // router 코드 생성
  const router = useRouter();

  const [editContents, setEditContents] = useState("");

  const [editContentsLength, setEditContentsLength] = useState(0);

  // 댓글 삭제하기 mutation 코드 생성
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const [myPassword, setMyPassword] = useState("");
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const onClickDeleteCommentButton = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myBoardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      message.success("댓글이 삭제되었습니다.");
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickOpenDeleteModal = (event: MouseEvent<HTMLElement>) => {
    setMyBoardCommentId(event.currentTarget.id);
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onClickCloseDeleteModal = (event: MouseEvent<HTMLElement>) => {
    setIsOpenDeleteModal(false);
  };

  // 수정 댓글 contents 글자수
  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
    setEditContentsLength(event.target.value.length);
  };

  return (
    <CommentListEditPresenter
      onClickDeleteCommentButton={onClickDeleteCommentButton}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onClickCloseDeleteModal={onClickCloseDeleteModal}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      editContents={editContents}
      onChangeEditContents={onChangeEditContents}
      el={props.el}
      onClickEdit={onClickEdit}
    ></CommentListEditPresenter>
  );
}
