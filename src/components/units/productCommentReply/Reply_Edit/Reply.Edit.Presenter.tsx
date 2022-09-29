import * as S from "./Reply.Edit.styles";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrowReturnRight } from "react-icons/bs";
import { getDate } from "../../../../commons/libraries/utils";
import { IReplyEditPresenterProps } from "./Reply.Edit.types";
import ReplyWriteContainer from "../Reply_write/Reply.Write.container";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";

export default function ReplyEditPresenter(props: IReplyEditPresenterProps) {
  const UserInfo = getUserInfo();

  return (
    <>
      {!props.isEdit && (
        <S.CommentsListDetail>
          <BsArrowReturnRight style={{ width: "30px", height: "30px" }} />
          <S.CommentsDetailImage src="/image/profile.webp"></S.CommentsDetailImage>
          <S.CommentsDetailMain>
            <S.CommentsDetailInfo>
              <S.DetailInfoUser>{props.ReplyEl.user.name}</S.DetailInfoUser>
            </S.CommentsDetailInfo>
            <S.CommentsDetailContents>
              {props.ReplyEl.contents}
            </S.CommentsDetailContents>
            <S.CommentsDetailDate>
              {getDate(props.ReplyEl.createdAt)}
            </S.CommentsDetailDate>
          </S.CommentsDetailMain>
          <S.CommentsDetailButton>
            <S.DetailButtonEdit onClick={props.onClickReplyEdit}>
              <GrEdit style={{ width: "60px", height: "60px" }} />
            </S.DetailButtonEdit>
            <S.DetailButtonDelete onClick={props.onClickDeleteAnswerButton}>
              <RiDeleteBinLine style={{ width: "60px", height: "60px" }} />
            </S.DetailButtonDelete>
          </S.CommentsDetailButton>
        </S.CommentsListDetail>
      )}

      {props.isEdit && (
        <ReplyWriteContainer
          ReplyEl={props.ReplyEl}
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
        ></ReplyWriteContainer>
      )}
    </>
  );
}
