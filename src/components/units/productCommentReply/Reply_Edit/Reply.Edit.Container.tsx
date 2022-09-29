import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../Reply_List/Reply.List.queries";
import ReplyEditPresenter from "./Reply.Edit.Presenter";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "./Reply.Edit.queries";

import { IReplyEditContainerProps } from "./Reply.Edit.types";

export default function ReplyEditContainer(props: IReplyEditContainerProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [answerEditContents, setAnswerEditContents] = useState("");
  const [answerEditContentsLength, setAnswerEditContentsLength] = useState(0);

  const onClickReplyEdit = () => {
    setIsEdit(true);
  };

  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const onClickDeleteAnswerButton = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.ReplyEl._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.ReplyEl.useditemQuestion._id,
            },
          },
        ],
      });

      message.success("답글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeEditAnswer = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerEditContents(event.target.value);
    setAnswerEditContentsLength(event.target.value.length);
  };

  return (
    <ReplyEditPresenter
      ReplyEl={props.ReplyEl}
      data={props.data}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      answerEditContents={answerEditContents}
      onClickDeleteAnswerButton={onClickDeleteAnswerButton}
      onClickReplyEdit={onClickReplyEdit}
      onChangeEditAnswer={onChangeEditAnswer}
    ></ReplyEditPresenter>
  );
}
