import * as S from "../write/ProductWrite.styles";
import { IProductWritePresenterProps } from "./ProductWrite.types";
import UploadImageContainer from "../../../commons/uploadImage-productWrite/UploadImage.container";
import { v4 as uuidv4 } from "uuid";
import KaKaoMap from "../../../commons/kakaoMap-productWrite";

export default function ProductWritePresenter(
  props: IProductWritePresenterProps
) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdateButton)
          : props.handleSubmit(props.onClickWriteButton)
      }
    >
      {props.isOpen && (
        <S.AddressModal
          visible={true}
          onCancel={props.onClickCloseAddressSearch}
        >
          <S.AddressSearch
            onComplete={props.onCompleteAddressSearch}
          ></S.AddressSearch>
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.WrapperHeader>
          {props.isEdit ? "귀여운 상품 수정하기" : "귀여운 상품 등록하기"}
        </S.WrapperHeader>

        <S.WrapperBody>
          <S.BodyDetail>
            <S.DetailTitle>상품명</S.DetailTitle>
            <S.DetailInput
              placeholder="상품명을 작성해주세요."
              {...props.register("name")}
            ></S.DetailInput>
            <S.InputError>{props.formState.errors.name?.message}</S.InputError>
          </S.BodyDetail>
          <S.BodyDetail>
            <S.DetailTitle>한줄 요약</S.DetailTitle>
            <S.DetailInput
              placeholder="상품을 한줄로 요약해주세요."
              {...props.register("remarks")}
            ></S.DetailInput>
            <S.InputError>
              {props.formState.errors.remarks?.message}
            </S.InputError>
          </S.BodyDetail>
          <S.BodyDetail>
            <S.DetailTitle>상품 설명</S.DetailTitle>
            {props.isEdit ? (
              props.data?.fetchUseditem.contents && (
                <S.ContentsReactQuill
                  placeholder="상품을 설명해주세요."
                  onChange={props.onChangeContents}
                  defaultValue={props.data?.fetchUseditem.contents}
                ></S.ContentsReactQuill>
              )
            ) : (
              <S.ContentsReactQuill
                placeholder="상품을 설명해주세요."
                onChange={props.onChangeContents}
              ></S.ContentsReactQuill>
            )}

            <S.InputError>
              {props.formState.errors.contents?.message}
            </S.InputError>
          </S.BodyDetail>
          <S.BodyDetail>
            <S.DetailTitle>판매 가격</S.DetailTitle>
            <S.DetailInput
              placeholder="판매 가격을 입력해주세요."
              {...props.register("price")}
            ></S.DetailInput>
            <S.InputError>{props.formState.errors.price?.message}</S.InputError>
          </S.BodyDetail>
          <S.BodyDetail>
            <S.DetailTitle>태그 입력</S.DetailTitle>
            <S.DetailInput
              placeholder="#태그 #태그 #태그"
              {...props.register("tags")}
            ></S.DetailInput>
            <S.InputError></S.InputError>
          </S.BodyDetail>

          <S.BodyMap>
            <S.MapLeft>
              <S.DetailTitle>거래 위치</S.DetailTitle>
              <KaKaoMap address={props.address} data={props.data}></KaKaoMap>
            </S.MapLeft>

            <S.MapRight>
              <S.DetailTitle>주소</S.DetailTitle>

              <S.ZipcodeDiv>
                <S.ZipcodeInput
                  type="num"
                  placeholder="우편번호"
                  readOnly
                  {...props.register("useditemAddress.zipcode")}
                ></S.ZipcodeInput>
                <S.AddressButton
                  type="button"
                  onClick={props.onClickAddressSearch}
                >
                  검색하기
                </S.AddressButton>
              </S.ZipcodeDiv>
              <S.AddressInput
                placeholder="기본 주소"
                readOnly
                {...props.register("useditemAddress.address")}
              ></S.AddressInput>
              <S.AddressInput
                {...props.register("useditemAddress.addressDetail")}
                placeholder="상세 주소"
              ></S.AddressInput>
            </S.MapRight>
          </S.BodyMap>

          <S.BodyPhoto>
            <S.DetailTitle>사진 첨부</S.DetailTitle>
            <S.PhotoWrapper>
              {props.fileUrls.map((el, index) => (
                <UploadImageContainer
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                ></UploadImageContainer>
              ))}
            </S.PhotoWrapper>
          </S.BodyPhoto>
        </S.WrapperBody>

        <S.ButtonWrapper>
          <S.WriteButton
            type="submit"
            style={{
              backgroundColor: props.formState.isValid ? "#ffd600" : "none",
            }}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.WriteButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
