import * as S from "./BoardList.styles";
import { CgProfile } from "react-icons/cg";
import { FaRegThumbsUp } from "react-icons/fa";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import BoardListPagination from "../../../commons/pagination-boardList/Pagination-boardList.container";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export default function BoardListPresenterPage(props: IBoardListUIProps) {
  const dateFormat = "YYYY-MM-DD";

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.WrapperHeaderTitle>최고 귀여운 친구들</S.WrapperHeaderTitle>
        <S.WrapperHeaderBoard>
          <S.HeaderBoardMain>
            <S.HeaderBoardPhoto src="/puppy1.jpeg"></S.HeaderBoardPhoto>
            <S.HeaderBoardContents>
              <S.HeaderBoardTitle>게시물 제목입니다</S.HeaderBoardTitle>
              <S.HeaderBoardBottom>
                <S.HeaderBoardInfo>
                  <S.BoardInfoProfile>
                    <S.ProfilePhoto>
                      <CgProfile style={{ width: "20px", height: "20px" }} />
                    </S.ProfilePhoto>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.BoardInfoProfile>
                  <S.BoardInfoDate>Date: 2022.07.12</S.BoardInfoDate>
                </S.HeaderBoardInfo>
                <S.HeaderBoardLike>
                  <S.BoardLikeThumb>
                    <FaRegThumbsUp
                      style={{
                        width: "20px",
                        height: "18px",
                        color: "#ffd600",
                      }}
                    />
                  </S.BoardLikeThumb>
                  <S.BoardLikeNum>0</S.BoardLikeNum>
                </S.HeaderBoardLike>
              </S.HeaderBoardBottom>
            </S.HeaderBoardContents>
          </S.HeaderBoardMain>
          <S.HeaderBoardMain>
            <S.HeaderBoardPhoto src="/puppy2.jpeg"></S.HeaderBoardPhoto>
            <S.HeaderBoardContents>
              <S.HeaderBoardTitle>게시물 제목입니다</S.HeaderBoardTitle>
              <S.HeaderBoardBottom>
                <S.HeaderBoardInfo>
                  <S.BoardInfoProfile>
                    <S.ProfilePhoto>
                      <CgProfile style={{ width: "20px", height: "20px" }} />
                    </S.ProfilePhoto>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.BoardInfoProfile>
                  <S.BoardInfoDate>Date: 2022.07.12</S.BoardInfoDate>
                </S.HeaderBoardInfo>
                <S.HeaderBoardLike>
                  <S.BoardLikeThumb>
                    <FaRegThumbsUp
                      style={{
                        width: "20px",
                        height: "18px",
                        color: "#ffd600",
                      }}
                    />
                  </S.BoardLikeThumb>
                  <S.BoardLikeNum>0</S.BoardLikeNum>
                </S.HeaderBoardLike>
              </S.HeaderBoardBottom>
            </S.HeaderBoardContents>
          </S.HeaderBoardMain>
          <S.HeaderBoardMain>
            <S.HeaderBoardPhoto src="/puppy3.jpeg"></S.HeaderBoardPhoto>
            <S.HeaderBoardContents>
              <S.HeaderBoardTitle>게시물 제목입니다</S.HeaderBoardTitle>
              <S.HeaderBoardBottom>
                <S.HeaderBoardInfo>
                  <S.BoardInfoProfile>
                    <S.ProfilePhoto>
                      <CgProfile style={{ width: "20px", height: "20px" }} />
                    </S.ProfilePhoto>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.BoardInfoProfile>
                  <S.BoardInfoDate>Date: 2022.07.12</S.BoardInfoDate>
                </S.HeaderBoardInfo>
                <S.HeaderBoardLike>
                  <S.BoardLikeThumb>
                    <FaRegThumbsUp
                      style={{
                        width: "20px",
                        height: "18px",
                        color: "#ffd600",
                      }}
                    />
                  </S.BoardLikeThumb>
                  <S.BoardLikeNum>0</S.BoardLikeNum>
                </S.HeaderBoardLike>
              </S.HeaderBoardBottom>
            </S.HeaderBoardContents>
          </S.HeaderBoardMain>
          <S.HeaderBoardMain>
            <S.HeaderBoardPhoto src="/puppy4.jpeg"></S.HeaderBoardPhoto>
            <S.HeaderBoardContents>
              <S.HeaderBoardTitle>게시물 제목입니다</S.HeaderBoardTitle>
              <S.HeaderBoardBottom>
                <S.HeaderBoardInfo>
                  <S.BoardInfoProfile>
                    <S.ProfilePhoto>
                      <CgProfile style={{ width: "20px", height: "20px" }} />
                    </S.ProfilePhoto>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.BoardInfoProfile>
                  <S.BoardInfoDate>Date: 2022.07.12</S.BoardInfoDate>
                </S.HeaderBoardInfo>
                <S.HeaderBoardLike>
                  <S.BoardLikeThumb>
                    <FaRegThumbsUp
                      style={{
                        width: "20px",
                        height: "18px",
                        color: "#ffd600",
                      }}
                    />
                  </S.BoardLikeThumb>
                  <S.BoardLikeNum>0</S.BoardLikeNum>
                </S.HeaderBoardLike>
              </S.HeaderBoardBottom>
            </S.HeaderBoardContents>
          </S.HeaderBoardMain>
        </S.WrapperHeaderBoard>
      </S.WrapperHeader>

      <S.WrapperSearch>
        <S.WrapperSearchInput
          placeholder="제목을 검색해주세요."
          onChange={props.onChangeSearch}
        ></S.WrapperSearchInput>
        <S.RangePickerStyle
          defaultValue={[
            moment("2022-01-01", dateFormat),
            moment("2022-01-31", dateFormat),
          ]}
          format={dateFormat}
        ></S.RangePickerStyle>
        <S.WrapperSearchButton onClick={props.onClickSearch}>
          검색하기
        </S.WrapperSearchButton>
      </S.WrapperSearch>

      <S.WrapperBody>
        <S.WrapperBodyHead>
          <S.BodyHeadColumn>번호</S.BodyHeadColumn>
          <S.BodyHeadColumnTitle>제목</S.BodyHeadColumnTitle>
          <S.BodyHeadWriter>작성자</S.BodyHeadWriter>
          <S.BodyHeadDate>날짜</S.BodyHeadDate>
        </S.WrapperBodyHead>
        {props.data?.fetchBoards.map((el) => (
          <S.WrapperBodyList key={el._id}>
            <S.BodyListColumn>
              {String(el._id).slice(-3).toUpperCase()}
            </S.BodyListColumn>
            <S.BodyListColumnTitle
              id={el._id}
              onClick={props.onClickMoveToDetail}
              style={{ cursor: "pointer" }}
            >
              {el.title
                .replaceAll(props.search, `@#$%${props.search}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <S.Token key={uuidv4()} isMatched={props.search === el}>
                    {el}
                  </S.Token>
                ))}
            </S.BodyListColumnTitle>
            <S.BodyListColumn>{el.writer}</S.BodyListColumn>
            <S.BodyListDate>{getDate(el.createdAt)}</S.BodyListDate>
          </S.WrapperBodyList>
        ))}
      </S.WrapperBody>

      <S.WrapperBottom>
        <S.WrapperBottomPageSelect>
          <BoardListPagination
            refetch={props.refetch}
            BoardsCount={props.BoardsCount}
          ></BoardListPagination>
        </S.WrapperBottomPageSelect>
        <S.WrapperBottomWriteButton onClick={props.onClickMoveToCreateBoard}>
          게시물 등록하기
        </S.WrapperBottomWriteButton>
      </S.WrapperBottom>
    </S.Wrapper>
  );
}
