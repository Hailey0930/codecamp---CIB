import * as S from "./Reply.Write.styles";
import { IReplyWritePresenterProps } from "./Reply.Write.types";

export default function ReplyWritePresenter(props: IReplyWritePresenterProps) {
  return (
    <S.CommentsCreate>
      <S.CommentsCreateContents
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며. 이에 대한 민형사상 책임은 게시자에게 있습니다."
        maxLength={100}
        onChange={props.onChangeContents}
        defaultValue={
          props.isEdit
            ? props.contents || props.ReplyEl.contents
            : props.contents
        }
      ></S.CommentsCreateContents>
      <S.CommentsCreateButton>
        <S.CommentsCount>
          {(props.contents
            ? props.contentsLength
            : props.ReplyEl?.contents.length) || 0}
          /100
        </S.CommentsCount>
        <S.CommentsButton
          onClick={
            props.isEdit ? props.onClickEditReply : props.onClickWriteReply
          }
        >
          {props.isEdit ? "답글수정" : "답글달기"}
        </S.CommentsButton>
      </S.CommentsCreateButton>
    </S.CommentsCreate>
  );
}
