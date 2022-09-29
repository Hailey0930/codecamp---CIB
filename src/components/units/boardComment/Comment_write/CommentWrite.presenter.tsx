import * as S from "../Comment_write/CommentWrite.styles";
import { BiCommentDetail } from "react-icons/bi";
import { ICommentWritePresenterProps } from "./CommentWrite.types";

export default function CommentWritePresenter(
  props: ICommentWritePresenterProps
) {
  return (
    <>
      <S.WrapperBottomComments>
        {!props.isEdit && (
          <S.CommentsTitle>
            <S.CommentsTitleIcon>
              <BiCommentDetail
                style={{ width: "50px", height: "30px", color: "#ffd600" }}
              />
            </S.CommentsTitleIcon>
            <S.CommentsTitleText>댓글</S.CommentsTitleText>
          </S.CommentsTitle>
        )}
        <S.CommentsCreate>
          <S.CommentsCreateInfo>
            <S.CreateInfoBox>
              <S.CommentsInfoUser
                placeholder="작성자"
                onChange={props.onChangeWriter}
                value={props.writer || props.el?.writer || ""}
              ></S.CommentsInfoUser>
              <S.CommentsError>{props.writerError}</S.CommentsError>
            </S.CreateInfoBox>
            <S.CreateInfoBox>
              <S.CommentsInfoPassword
                placeholder="비밀번호"
                type="password"
                onChange={props.onChangePassword}
                value={props.password}
              ></S.CommentsInfoPassword>
              <S.CommentsError>{props.passwordError}</S.CommentsError>
            </S.CreateInfoBox>
            <S.CreateInfoBox>
              <S.CommentsInfoRating
                onChange={props.setRating}
                value={props.rating || props.el?.rating || 0}
              ></S.CommentsInfoRating>
            </S.CreateInfoBox>
          </S.CommentsCreateInfo>
          <S.CommentsCreateContents
            onChange={props.onChangeContents}
            value={
              props.isEdit
                ? props.contents || props.el?.contents
                : props.contents
            }
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며. 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
          ></S.CommentsCreateContents>
          <S.CommentsCreateButton>
            <S.CommentsCount>
              {(props.contents
                ? props.contentsLength
                : props.el?.contents.length) || 0}
              /100
            </S.CommentsCount>
            <S.CommentsButton
              onClick={
                props.isEdit
                  ? props.onClickCommentsEditButton
                  : props.onClickCreateCommentButton
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.CommentsButton>
          </S.CommentsCreateButton>
          <S.CommentsError>{props.contentsError}</S.CommentsError>
        </S.CommentsCreate>
      </S.WrapperBottomComments>
    </>
  );
}
