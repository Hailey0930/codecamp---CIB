import { ICommentListEditPresenterProps } from "./CommentListEdit.types";
import * as S from "../Comment_List_Edit/CommentListEdit.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import CommentWriteContainer from "../Comment_write/CommentWrite.container";

export default function CommentListEditPresenter(
  props: ICommentListEditPresenterProps
) {
  return (
    <>
      {props.isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onOk={props.onClickDeleteCommentButton}
          onCancel={props.onClickCloseDeleteModal}
        >
          <div>댓글 비밀번호 입력 : </div>
          <S.ModalPasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          ></S.ModalPasswordInput>
        </S.PasswordModal>
      )}

      {!props.isEdit && (
        <S.CommentsListDetail key={props.el._id}>
          <S.CommentsDetailImage src="/image/profile.webp"></S.CommentsDetailImage>
          <S.CommentsDetailMain key={props.el._id} id={props.el.writer || ""}>
            <S.CommentsDetailInfo>
              <S.DetailInfoUser>{props.el.writer}</S.DetailInfoUser>
              <S.DetailInfoRating
                disabled
                defaultValue={props.el.rating}
              ></S.DetailInfoRating>
            </S.CommentsDetailInfo>
            <S.CommentsDetailContents>
              {props.el.contents}
            </S.CommentsDetailContents>
            <S.CommentsDetailDate>
              {getDate(props.el.createdAt)}
            </S.CommentsDetailDate>
          </S.CommentsDetailMain>
          <S.CommentsDetailButton>
            <S.DetailButtonEdit onClick={props.onClickEdit}>
              <GrEdit style={{ width: "60px", height: "60px" }} />
            </S.DetailButtonEdit>
            <S.DetailButtonDelete
              id={props.el._id}
              onClick={props.onClickOpenDeleteModal}
            >
              <RiDeleteBinLine style={{ width: "60px", height: "60px" }} />
            </S.DetailButtonDelete>
          </S.CommentsDetailButton>
        </S.CommentsListDetail>
      )}

      {props.isEdit && (
        <S.CommentWriteContainerDiv>
          <CommentWriteContainer
            isEdit={true}
            setIsEdit={props.setIsEdit}
            el={props.el}
          ></CommentWriteContainer>
        </S.CommentWriteContainerDiv>
      )}
    </>
  );
}
