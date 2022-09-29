import { BsLink } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { getDate } from "../../../../commons/libraries/utils";
import { Tooltip } from "antd";
import ReactPlayer from "react-player/youtube";

import * as S from "./BoardDetail.styles";
import { IBoardDetailPresenterProps } from "./BoardDetail.types";
import CommentWriteContainer from "../../boardComment/Comment_write/CommentWrite.container";
import CommentListContainer from "../../boardComment/Comment_List/CommentList.container";

export default function BoardDetailPresenter(
  props: IBoardDetailPresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.WrapperHeader>
          <S.Profile>
            <S.ProfileImage src="/image/profile.webp"></S.ProfileImage>
            <S.ProfileDetail>
              <S.ProfileDetailName>
                {props.boardData?.fetchBoard?.writer}
              </S.ProfileDetailName>
              <S.ProfileDetailCreateAt>
                Date :{" "}
                {props.boardData
                  ? getDate(props.boardData.fetchBoard.createdAt)
                  : "loading..."}
              </S.ProfileDetailCreateAt>
            </S.ProfileDetail>
          </S.Profile>
          <S.BoardInfo>
            <S.BoardInfoUrl>
              <BsLink
                style={{ width: "30px", height: "30px", color: "#ffd600" }}
              />
            </S.BoardInfoUrl>
            <S.BoardInfoGps>
              <Tooltip
                placement="top"
                title={
                  props.boardData?.fetchBoard.boardAddress
                    ? `${props.boardData?.fetchBoard.boardAddress?.address} ${props.boardData?.fetchBoard.boardAddress?.addressDetail}`
                    : ""
                }
              >
                <BiMap
                  style={{ width: "30px", height: "30px", color: "#ffd600" }}
                />
              </Tooltip>
            </S.BoardInfoGps>
          </S.BoardInfo>
        </S.WrapperHeader>

        <S.WrapperBody>
          <S.BoardDetail>
            <S.BoardDetailTitle>
              {props.boardData?.fetchBoard.title}
            </S.BoardDetailTitle>
            <S.BoardDetailImage>
              {props.boardData?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.DetailImage
                    key={el}
                    src={`http://storage.googleapis.com/${el}`}
                  ></S.DetailImage>
                ))}
            </S.BoardDetailImage>
            <S.BoardDetailContents>
              {props.boardData?.fetchBoard.contents}
            </S.BoardDetailContents>
          </S.BoardDetail>
          {props.boardData?.fetchBoard.youtubeUrl && (
            <S.BoardYoutubeUrl>
              <ReactPlayer
                url={props.boardData?.fetchBoard.youtubeUrl}
                width="486px"
                height="240px"
                playing={true}
                controls={true}
              ></ReactPlayer>
            </S.BoardYoutubeUrl>
          )}

          <S.BoardReaction>
            <S.BoardReactionWrapper>
              <S.BoardReactionLikeButton onClick={props.onClickThumbsUp}>
                <FaRegThumbsUp style={{ width: "50px", height: "30px" }} />
              </S.BoardReactionLikeButton>
              <S.BoardReactionLikeText>
                {props.boardData?.fetchBoard.likeCount}
              </S.BoardReactionLikeText>
            </S.BoardReactionWrapper>
            <S.BoardReactionWrapper>
              <S.BoardReactionDislikeButton onClick={props.onClickThumbsDown}>
                <FaRegThumbsDown style={{ width: "50px", height: "30px" }} />
              </S.BoardReactionDislikeButton>
              <S.BoardReactionDislikeText>
                {props.boardData?.fetchBoard.dislikeCount}
              </S.BoardReactionDislikeText>
            </S.BoardReactionWrapper>
          </S.BoardReaction>
        </S.WrapperBody>
      </S.Wrapper>
      <S.WrapperBottom>
        <S.WrapperBottomButton>
          <S.BoardButton onClick={props.onClickMoveToListButton}>
            목록으로
          </S.BoardButton>
          <S.BoardButton onClick={props.onClickUpdateButton}>
            수정하기
          </S.BoardButton>
          <S.BoardButton onClick={props.onClickDeleteButton}>
            삭제하기
          </S.BoardButton>
        </S.WrapperBottomButton>
      </S.WrapperBottom>

      <CommentWriteContainer></CommentWriteContainer>

      <CommentListContainer></CommentListContainer>
    </>
  );
}
