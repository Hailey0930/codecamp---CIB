import * as S from "./buyList.styles";
import { FaHeart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import InfiniteScroll from "react-infinite-scroller";
import { IBuyListPresenterProps } from "./buyList.types";

export default function BuyListPresenter(props: IBuyListPresenterProps) {
  console.log(props.data);

  return (
    <S.Wrapper>
      <S.Title>Buy List</S.Title>
      <S.WrapperBody>
        <S.ProductListBody>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.FetchMoreUseditemsIBought}
            hasMore={true}
          >
            {props.data?.fetchUseditemsIBought.map((el) => (
              <S.MapDiv key={el._id}>
                <S.ProductLeft key={el._id}>
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
                              height: "18px",
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
                        width: "40px",
                        height: "40px",
                        color: "#ffd600",
                      }}
                    />
                  </S.PriceIcon>
                  <S.Price>{el.price?.toLocaleString()}원</S.Price>
                </S.ProductRight>
              </S.MapDiv>
            ))}
          </InfiniteScroll>
        </S.ProductListBody>
      </S.WrapperBody>
    </S.Wrapper>
  );
}
