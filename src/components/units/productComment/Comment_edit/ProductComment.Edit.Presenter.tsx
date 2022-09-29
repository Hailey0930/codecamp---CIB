import * as S from "./ProductComment.Edit.styles";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineAddComment } from "react-icons/md";
import { IProductCommentEditPresenterProps } from "./ProductComment.Edit.types";
import { getDate } from "../../../../commons/libraries/utils";
import ProductCommentWriteContainer from "../Comment_write/ProductComment.Write.container";
import ReplyWriteContainer from "../../productCommentReply/Reply_write/Reply.Write.container";
import ReplyListContainer from "../../productCommentReply/Reply_List/Reply.List.container";

export default function ProductCommentEditPresenter(
  props: IProductCommentEditPresenterProps
) {
  return (
    <>
      {!props.isEdit && (
        <S.CommentsListDetail key={props.el._id}>
          <S.CommentsDetailImage src="/image/profile.webp"></S.CommentsDetailImage>
          <S.CommentsDetailMain>
            <S.CommentsDetailInfo>
              <S.DetailInfoUser>{props.el.user.name}</S.DetailInfoUser>
            </S.CommentsDetailInfo>
            <S.CommentsDetailContents>
              {props.el.contents}
            </S.CommentsDetailContents>
            <S.CommentsDetailDate>
              {getDate(props.el.createdAt)}
            </S.CommentsDetailDate>
          </S.CommentsDetailMain>
          <S.CommentsDetailButton>
            <>
              {props.el.user.name ===
                props.UserInfo?.fetchUserLoggedIn.name && (
                <>
                  <S.DetailButtonEdit onClick={props.onClickEdit}>
                    <GrEdit style={{ width: "60px", height: "60px" }} />
                  </S.DetailButtonEdit>
                  <S.DetailButtonDelete
                    onClick={props.onClickDeleteQuestionButton}
                  >
                    <RiDeleteBinLine
                      style={{ width: "60px", height: "60px" }}
                    />
                  </S.DetailButtonDelete>
                </>
              )}
              <S.DetailButtonAnswer onClick={props.onClickReply}>
                <MdOutlineAddComment
                  style={{ width: "60px", height: "60px" }}
                ></MdOutlineAddComment>
              </S.DetailButtonAnswer>
            </>
          </S.CommentsDetailButton>
        </S.CommentsListDetail>
      )}

      {props.isEdit && (
        <S.CommentWriteContainerDiv>
          <ProductCommentWriteContainer
            isEdit={true}
            setIsEdit={props.setIsEdit}
            el={props.el}
          ></ProductCommentWriteContainer>
        </S.CommentWriteContainerDiv>
      )}

      {props.isReply && (
        <ReplyWriteContainer
          el={props.el}
          setIsReply={props.setIsReply}
        ></ReplyWriteContainer>
      )}
      <ReplyListContainer el={props.el}></ReplyListContainer>
    </>
  );
}
