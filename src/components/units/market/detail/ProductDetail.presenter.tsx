import * as S from "./ProductDetail.styles";
import { BsLink } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Tooltip } from "antd";
import ProductCommentWriteContainer from "../../productComment/Comment_write/ProductComment.Write.container";
import ProductCommentListContainer from "../../productComment/Comment_list/ProductComment.List.container";
import { IProductDetailPresenterProps } from "./ProductDetail.types";
import { getDate } from "../../../../commons/libraries/utils";
import Dompurify from "dompurify";
import KaKaoMap from "../../../commons/kakaoMap-productDetail";

export default function ProductDetailPresenter(
  props: IProductDetailPresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.WrapperHeader>
          <S.Profile>
            <S.ProfileImage src="/image/profile.webp"></S.ProfileImage>
            <S.ProfileDetail>
              <S.ProfileDetailName>
                {props.data?.fetchUseditem.seller?.name}
              </S.ProfileDetailName>
              <S.ProfileDetailCreateAt>
                {getDate(props.data?.fetchUseditem.createdAt)}
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
                  props.data?.fetchUseditem.useditemAddress
                    ? `${props.data.fetchUseditem.useditemAddress.address} ${props.data.fetchUseditem.useditemAddress.addressDetail}`
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
          <S.BodyTitle>
            <S.ProductTitle>
              <S.ProductRemark>
                {props.data?.fetchUseditem.remarks}
              </S.ProductRemark>
              <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
              <S.ProductPrice>
                {props.data?.fetchUseditem.price?.toLocaleString()}원
              </S.ProductPrice>
            </S.ProductTitle>
            <S.ProductLike>
              <S.LikeIcon onClick={props.onClickPick}>
                <FaHeart
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#ffd600",
                  }}
                />
              </S.LikeIcon>
              <S.LikeCount>{props.data?.fetchUseditem.pickedCount}</S.LikeCount>
            </S.ProductLike>
          </S.BodyTitle>

          <S.BodyDetail>
            <S.BodyPhotoDiv>
              {props.data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.BodyPhoto
                    key={el}
                    src={`http://storage.googleapis.com/${el}`}
                  ></S.BodyPhoto>
                ))}
            </S.BodyPhotoDiv>
            {typeof window !== "undefined" ? (
              <S.BodyContents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></S.BodyContents>
            ) : (
              <S.BodyContents></S.BodyContents>
            )}
            <S.BodyTag>{props.data?.fetchUseditem.tags}</S.BodyTag>
          </S.BodyDetail>
        </S.WrapperBody>

        <S.WrapperBody>
          <KaKaoMap data={props.data}></KaKaoMap>
        </S.WrapperBody>

        <S.ButtonWrapper>
          <S.ButtonBody>
            <S.ProductButton onClick={props.onClickList}>
              목록으로
            </S.ProductButton>
            <S.ProductButton
              onClick={
                props.data?.fetchUseditem.seller?.name ===
                props.UserInfo?.fetchUserLoggedIn.name
                  ? props.onClickUpdateButton
                  : props.onClickBuyButton
              }
            >
              {props.data?.fetchUseditem.seller?.name ===
              props.UserInfo?.fetchUserLoggedIn.name
                ? "수정하기"
                : "구매하기"}
            </S.ProductButton>
            {props.data?.fetchUseditem.seller?.name ===
              props.UserInfo?.fetchUserLoggedIn.name && (
              <S.ProductButton onClick={props.onClickDeleteButton}>
                삭제하기
              </S.ProductButton>
            )}
          </S.ButtonBody>
        </S.ButtonWrapper>

        <ProductCommentWriteContainer></ProductCommentWriteContainer>

        <ProductCommentListContainer
          data={props.data}
        ></ProductCommentListContainer>
      </S.Wrapper>
    </>
  );
}
