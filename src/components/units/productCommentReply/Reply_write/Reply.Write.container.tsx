import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IUpdateUseditemQuestionAnswerInput,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../Reply_List/Reply.List.queries";

import ReplyWritePresenter from "./Reply.Write.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./Reply.Write.queries";
import { IReplyWriteContainerProps } from "./Reply.Write.types";

export default function ReplyWriteContainer(props: any) {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const [contents, setContents] = useState("");
  const [contentsLength, setContentsLength] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    event.target.value ? setIsActive(true) : setIsActive(false);
    setContentsLength(event.target.value.length);
  };

  const onClickWriteReply = () => {
    if (!props.el) return;
    try {
      createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.el?._id,
            },
          },
        ],
      });
      props.setIsReply(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEditReply = async () => {
    if (!contents) {
      message.warning("수정한 내용이 없습니다.");
      return;
    }

    try {
      const updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput =
        {};
      if (contents) updateUseditemQuestionAnswerInput.contents = contents;

      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionAnswerId: props.ReplyEl?._id,
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
      props.setIsEdit(false);
      message.success("답글이 수정되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ReplyWritePresenter
      contents={contents}
      contentsLength={contentsLength}
      onChangeContents={onChangeContents}
      onClickWriteReply={onClickWriteReply}
      ReplyEl={props.ReplyEl}
      isEdit={props.isEdit}
      onClickEditReply={onClickEditReply}
    ></ReplyWritePresenter>
  );
}
