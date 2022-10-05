import * as S from "./ProductList.styles";
import { FaHeart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsFillPencilFill } from "react-icons/bs";

import moment from "moment";
import { IProductListPresenterProps } from "./ProductList.types";

export default function ProductListPresenter(
  props: IProductListPresenterProps
) {
  const dateFormat = "YYYY-MM-DD";

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.WrapperHeaderTitle>베스트 상품</S.WrapperHeaderTitle>
        <S.WrapperHeaderProduct>
          <S.HeaderProductMain>
            <S.HeaderProductPhoto src="/puppy1.jpeg"></S.HeaderProductPhoto>
            <S.HeaderProductContents>
              <S.HeaderProductTitle>
                삼성전자 갤럭시탭A 10.1
              </S.HeaderProductTitle>
            </S.HeaderProductContents>
            <S.HeaderProductBottom>
              <S.ProductBottomDetail>
                <S.HeaderProductRemarks>2019 LTE 32GB</S.HeaderProductRemarks>
                <S.HeaderProductPrice>240,120원</S.HeaderProductPrice>
              </S.ProductBottomDetail>
              <S.ProductLikeWrapper>
                <S.ProductLikeIcon>
                  <FaHeart
                    style={{
                      width: "20px",
                      height: "18px",
                      color: "#ffd600",
                    }}
                  />
                </S.ProductLikeIcon>
                <S.ProductLikeCount>20</S.ProductLikeCount>
              </S.ProductLikeWrapper>
            </S.HeaderProductBottom>
          </S.HeaderProductMain>
          <S.HeaderProductMain>
            <S.HeaderProductPhoto src="/puppy2.jpeg"></S.HeaderProductPhoto>
            <S.HeaderProductContents>
              <S.HeaderProductTitle>
                MSI MPG Z490 게이밍 엣지
              </S.HeaderProductTitle>
            </S.HeaderProductContents>
            <S.HeaderProductBottom>
              <S.ProductBottomDetail>
                <S.HeaderProductRemarks>인텔 CPU용</S.HeaderProductRemarks>
                <S.HeaderProductPrice>274,260원</S.HeaderProductPrice>
              </S.ProductBottomDetail>
              <S.ProductLikeWrapper>
                <S.ProductLikeIcon>
                  <FaHeart
                    style={{
                      width: "20px",
                      height: "18px",
                      color: "#ffd600",
                    }}
                  />
                </S.ProductLikeIcon>
                <S.ProductLikeCount>1</S.ProductLikeCount>
              </S.ProductLikeWrapper>
            </S.HeaderProductBottom>
          </S.HeaderProductMain>
          <S.HeaderProductMain>
            <S.HeaderProductPhoto src="/puppy3.jpeg"></S.HeaderProductPhoto>
            <S.HeaderProductContents>
              <S.HeaderProductTitle>레고 오버워치 레킹 볼</S.HeaderProductTitle>
            </S.HeaderProductContents>
            <S.HeaderProductBottom>
              <S.ProductBottomDetail>
                <S.HeaderProductRemarks>
                  게임보다 더 귀여움 실화?
                </S.HeaderProductRemarks>
                <S.HeaderProductPrice>28,370원</S.HeaderProductPrice>
              </S.ProductBottomDetail>
              <S.ProductLikeWrapper>
                <S.ProductLikeIcon>
                  <FaHeart
                    style={{
                      width: "20px",
                      height: "18px",
                      color: "#ffd600",
                    }}
                  />
                </S.ProductLikeIcon>
                <S.ProductLikeCount>0</S.ProductLikeCount>
              </S.ProductLikeWrapper>
            </S.HeaderProductBottom>
          </S.HeaderProductMain>
          <S.HeaderProductMain>
            <S.HeaderProductPhoto src="/puppy4.jpeg"></S.HeaderProductPhoto>
            <S.HeaderProductContents>
              <S.HeaderProductTitle>ABKO HACKER K590</S.HeaderProductTitle>
            </S.HeaderProductContents>
            <S.HeaderProductBottom>
              <S.ProductBottomDetail>
                <S.HeaderProductRemarks>
                  단하루 139만+GIFT
                </S.HeaderProductRemarks>
                <S.HeaderProductPrice>24,000원</S.HeaderProductPrice>
              </S.ProductBottomDetail>
              <S.ProductLikeWrapper>
                <S.ProductLikeIcon>
                  <FaHeart
                    style={{
                      width: "20px",
                      height: "18px",
                      color: "#ffd600",
                    }}
                  />
                </S.ProductLikeIcon>
                <S.ProductLikeCount>10</S.ProductLikeCount>
              </S.ProductLikeWrapper>
            </S.HeaderProductBottom>
          </S.HeaderProductMain>
        </S.WrapperHeaderProduct>
      </S.WrapperHeader>

      <S.WrapperSearch>
        <S.CategoryButton>
          <S.SellingButton>판매중상품</S.SellingButton>
          <S.SoldOutButton>판매된상품</S.SoldOutButton>
        </S.CategoryButton>
        <S.SearchBody>
          <S.WrapperSearchInput placeholder="제품을 검색해주세요."></S.WrapperSearchInput>
          <S.RangePickerStyle
            defaultValue={[
              moment("2022-01-01", dateFormat),
              moment("2022-01-31", dateFormat),
            ]}
            format={dateFormat}
          ></S.RangePickerStyle>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.SearchBody>
      </S.WrapperSearch>

      <S.WrapperList>
        <S.InfiniteScrollDiv>
          <S.StyleInfiniteScroll
            pageStart={0}
            loadMore={props.FetchMoreUseditems}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <S.ProductListBody
                key={el._id}
                onClick={props.onClickMoveToDetail(el)}
                id={el._id}
              >
                <S.ProductLeft>
                  <S.ProductPhoto
                    src={
                      el.images?.[0] || el.images?.[1]
                        ? `http://storage.googleapis.com/${el.images?.[0]}`
                        : `/image/product.webp`
                    }
                  ></S.ProductPhoto>
                  <S.ProductDetail>
                    <S.ProductTitle>{el.name}</S.ProductTitle>
                    <S.ProductRemarks>{el.remarks}</S.ProductRemarks>
                    <S.ProductTag>{el.tags}</S.ProductTag>
                    <S.WrapperSeller>
                      <S.SellerInfo>
                        <S.ProfileImage src="/image/profile.webp"></S.ProfileImage>
                        <S.SellerName>{el.seller?.name}</S.SellerName>
                      </S.SellerInfo>
                      <S.LikeInfo>
                        <S.LikeIcon>
                          <FaHeart
                            style={{
                              width: "20px",
                              height: "30px",
                              color: "#ffd600",
                            }}
                          />
                        </S.LikeIcon>
                        <S.LikeCount>{el.pickedCount}</S.LikeCount>
                      </S.LikeInfo>
                    </S.WrapperSeller>
                  </S.ProductDetail>
                </S.ProductLeft>

                <S.ProductRight>
                  <S.PriceIcon>
                    <GiMoneyStack
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#ffd600",
                      }}
                    />
                  </S.PriceIcon>
                  <S.Price>{el.price?.toLocaleString()}원</S.Price>
                </S.ProductRight>
              </S.ProductListBody>
            ))}
          </S.StyleInfiniteScroll>
        </S.InfiniteScrollDiv>

        <S.TodayDiv>
          <S.StyleInfiniteScroll
            pageStart={0}
            loadMore={props.todays}
            hasMore={true}
            useWindow={false}
          >
            <S.TodayTitle>오늘 본 상품</S.TodayTitle>
            {props.todays.map((el) => (
              <S.TodayProduct
                key={el._id}
                onClick={props.onClickToday}
                id={el._id}
              >
                <S.TodayLikeWrapper>
                  <S.TodayLikeIcon>
                    <FaHeart
                      style={{
                        width: "13px",
                        height: "13px",
                        color: "#ffd600",
                      }}
                    />
                  </S.TodayLikeIcon>
                  <S.TodayLikeNum>{el.pickedCount}</S.TodayLikeNum>
                </S.TodayLikeWrapper>

                <S.TodayImage
                  src={
                    el.images?.[0] || el.images?.[1]
                      ? `http://storage.googleapis.com/${el.images?.[0]}`
                      : `/image/product.webp`
                  }
                ></S.TodayImage>
                <S.TodayProductDetail>
                  <S.TodayName>{el.name}</S.TodayName>
                  <S.TodayRemarks>{el.remarks}</S.TodayRemarks>
                  <S.TodayPrice>{el.price}원</S.TodayPrice>
                  <S.TodayTag>{el.tags}</S.TodayTag>
                </S.TodayProductDetail>
              </S.TodayProduct>
            ))}
          </S.StyleInfiniteScroll>
        </S.TodayDiv>
      </S.WrapperList>
      <S.ProductButtonWrapper>
        <S.ProductButton onClick={props.onClickProductWrite}>
          <BsFillPencilFill style={{ width: "20px", height: "20px" }} />
          상품 등록하기
        </S.ProductButton>
      </S.ProductButtonWrapper>
    </S.Wrapper>
  );
}
