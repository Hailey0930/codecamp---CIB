import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import CommentWritePresenter from "./CommentWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import React, { ChangeEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../Comment_List/CommentList.queries";
import { ICommentWriteContainerProps } from "./CommentWrite.types";
import { UPDATE_BOARD_COMMENT } from "../Comment_List_Edit/CommentListEdit.queries";
import { message, Modal } from "antd";

export default function CommentWriteContainer(
  props: ICommentWriteContainerProps
) {
  const router = useRouter();

  // state 박스 생성
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [contentsLength, setContentsLength] = useState(0);

  // 등록 버튼 활성화 state
  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    event.target.value
      ? setWriterError("")
      : setWriterError("이름을 입력하세요.");
    event.target.value && password && contents
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    event.target.value
      ? setPasswordError("")
      : setPasswordError("비밀번호를 입력하세요.");
    writer && event.target.value && contents
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    event.target.value
      ? setContentsError("")
      : setContentsError("댓글을 입력하세요.");
    writer && password && event.target.value
      ? setIsActive(true)
      : setIsActive(false);
    setContentsLength(event.target.value.length);
  };

  // 댓글 등록하기 mutation 코드 생성
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const onClickCreateCommentButton = async () => {
    writer ? setWriterError("") : setWriterError("이름을 입력하세요.");
    password
      ? setPasswordError("")
      : setPasswordError("비밀번호를 입력하세요.");
    contents ? setContentsError("") : setContentsError("댓글을 입력하세요.");

    if (typeof router.query.boardId !== "string") return;
    if (writer && password && contents) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              rating,
              contents,
            },
            boardId: router.query.boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        props.setIsEdit?.(false);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
      setWriter("");
      setPassword("");
      setContents("");
      setRating(0);
    }
  };

  // 댓글 수정하기 mutation 코드 생성
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onClickCommentsEditButton = async () => {
    if (!contents) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }
    if (!password) {
      message.error("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (rating !== props.el?.rating) updateBoardCommentInput.rating = rating;

      if (typeof props.el?._id !== "string") return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
      message.success("댓글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <CommentWritePresenter
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      setRating={setRating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      contentsError={contentsError}
      contentsLength={contentsLength}
      onClickCreateCommentButton={onClickCreateCommentButton}
      onClickCommentsEditButton={onClickCommentsEditButton}
      el={props.el}
      isEdit={props.isEdit}
    ></CommentWritePresenter>
  );
}
