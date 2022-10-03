import UploadImageContainer from "../../../commons/uploadImage-boardWrite/UploadImage.container";
import * as S from "./BoardWrite.styles";
import { IBoardWritePresenterProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWritePresenter(props: IBoardWritePresenterProps) {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal
          visible={true}
          onCancel={props.onClickCloseAddressSearch}
        >
          <S.AddressSearchInput
            onComplete={props.onCompleteAddressSearch}
          ></S.AddressSearchInput>
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.WrapperHeader>
          {props.isEdit ? "자랑 수정하기" : "귀여움 자랑하기"}
        </S.WrapperHeader>

        <S.WrapperBody>
          <S.BodyInfo>
            <S.BodyTitleInput>
              <S.Title>작성자</S.Title>
              <S.InfoInput
                placeholder="이름을 입력해주세요."
                type="text"
                onChange={props.onChangeWriter}
                defaultValue={props.data?.fetchBoard.writer}
                readOnly={!!props.data?.fetchBoard.writer}
              ></S.InfoInput>
              <S.InputError>{props.writerError}</S.InputError>
            </S.BodyTitleInput>
            {console.log("writer", props.data?.fetchBoard.writer)}
            <S.BodyTitleInput>
              <S.Title>비밀번호</S.Title>
              <S.InfoInput
                placeholder="비밀번호를 입력해주세요."
                type="password"
                onChange={props.onChangePassword}
              ></S.InfoInput>
              <S.InputError>{props.passwordError}</S.InputError>
            </S.BodyTitleInput>
          </S.BodyInfo>

          <S.BodyContents>
            <S.Title>제목</S.Title>
            <S.ContentsInput
              placeholder="제목을 작성해주세요."
              type="text"
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title}
            ></S.ContentsInput>
            <S.InputError>{props.titleError}</S.InputError>

            <S.Title>내용</S.Title>
            <S.ContentsInputDetail
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContents}
              defaultValue={props.data?.fetchBoard.contents}
            ></S.ContentsInputDetail>
            <S.InputError>{props.contentsError}</S.InputError>

            <S.Title>주소</S.Title>
            <S.AddressSearch>
              <S.ContentsInputAddress
                type="num"
                placeholder="우편번호"
                readOnly
                value={
                  props.zipcode ||
                  props.data?.fetchBoard.boardAddress?.zipcode ||
                  ""
                }
              ></S.ContentsInputAddress>
              <S.AddressButton onClick={props.onClickAddressSearch}>
                우편번호 검색
              </S.AddressButton>
            </S.AddressSearch>
            <S.ContentsInput
              type="text"
              placeholder="기본 주소"
              readOnly
              value={
                props.address ||
                props.data?.fetchBoard.boardAddress?.address ||
                ""
              }
            ></S.ContentsInput>
            <S.ContentsInput
              type="text"
              placeholder="상세 주소"
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail || ""
              }
            ></S.ContentsInput>

            <S.Title>유튜브</S.Title>
            <S.ContentsInput
              placeholder="링크를 복사해주세요."
              type="text"
              onChange={props.onChangeYoutubeUrl}
              defaultValue={props.data?.fetchBoard.youtubeUrl}
            ></S.ContentsInput>

            <S.BodyTitleInputPhoto>
              <S.Title>사진 첨부</S.Title>
              <S.PhotoDiv>
                {props.fileUrls.map((el, index) => (
                  <UploadImageContainer
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  ></UploadImageContainer>
                ))}
              </S.PhotoDiv>
            </S.BodyTitleInputPhoto>
          </S.BodyContents>
        </S.WrapperBody>

        <S.WrapperButton>
          <S.MutationButton
            onClick={
              props.isEdit
                ? props.onClickFreeboardUpdatePage
                : props.onClickFreeboardMutationPage
            }
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "자랑하기"}
          </S.MutationButton>
        </S.WrapperButton>
      </S.Wrapper>
    </>
  );
}
