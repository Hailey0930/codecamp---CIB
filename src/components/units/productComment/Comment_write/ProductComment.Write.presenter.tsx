import * as S from "./ProductComment.Write.styles";
import { BiCommentDetail } from "react-icons/bi";
import { IProductCommentWritePresenterProps } from "./ProductComment.Write.types";

export default function ProductCommentWritePresenter(
  props: IProductCommentWritePresenterProps
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
            <S.CommentsTitleText>문의사항</S.CommentsTitleText>
          </S.CommentsTitle>
        )}

        <S.CommentsCreate>
          <S.CommentsCreateContents
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며. 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
            onChange={props.onChangeContents}
            value={
              props.isEdit
                ? props.contents || props.el?.contents
                : props.contents
            }
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
                  ? props.onClickCommentEditButton
                  : props.onClickCommentWriteButton
              }
            >
              {props.isEdit ? "수정하기" : "문의하기"}
            </S.CommentsButton>
          </S.CommentsCreateButton>
        </S.CommentsCreate>
        <S.CommentsError>{props.contentsError}</S.CommentsError>
      </S.WrapperBottomComments>
    </>
  );
}
