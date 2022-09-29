import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 1300px;
  margin: 100px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 350px;
  height: 42px;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  color: black;
  padding: 10px;
  margin-bottom: 30px;
  font-family: "SDSamliphopangche_Outline";
`;

export const WrapperHeaderProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const HeaderProductMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 270px;
  height: 391px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

export const HeaderProductPhoto = styled.img`
  display: flex;
  flex-direction: column;

  width: 270px;
  height: 242px;
`;

export const HeaderProductContents = styled.div`
  display: flex;
  flex-direction: column;

  width: 270px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const HeaderProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 27px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  padding: 10px;
  margin-top: 5px;
`;

export const HeaderProductBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 270px;
`;

export const ProductBottomDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const HeaderProductRemarks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 18px;
  font-size: 12px;
  color: #4f4f4f;
  margin-bottom: 20px;
`;

export const HeaderProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 28px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

export const ProductLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
`;

export const ProductLikeIcon = styled.div`
  width: 20px;
  height: 18px;

  margin-bottom: 5px;
`;

export const ProductLikeCount = styled.div`
  height: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;

  width: 1050px;
  padding: 10px;
`;

export const CategoryButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 230px;
`;

export const SellingButton = styled.button`
  width: 100px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SoldOutButton = styled.button`
  width: 100px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SearchBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 700px;
`;

export const WrapperSearchInput = styled.input`
  width: 282px;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  ::placeholder {
    width: 141px;
    height: 24px;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: gray;
  }
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  padding: 14px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border: none;
    color: black;
  }
`;

export const WrapperList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1250px;
  padding: 10px;
`;

export const ProductListBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1000px;
  padding: 15px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const ProductLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductPhoto = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 25px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  height: 36px;
  font-size: 24px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ProductRemarks = styled.div`
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const ProductTag = styled.div`
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #bdbdbd;
`;

export const WrapperSeller = styled.div`
  display: flex;
  flex-direction: row;

  height: 20px;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const SellerName = styled.div`
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
`;

export const LikeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const LikeCount = styled.div`
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const ProductRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PriceIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const Price = styled.div`
  height: 36px;
  font-size: 24px;
  font-weight: 700;
`;

export const TodayDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 170px;
  height: 1000px;
  border: 1px solid #bdbdbd;
  overflow: auto;
`;

export const TodayTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 150px;
  height: 27px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TodayProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 156px;
  height: 210px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const TodayLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 140px;
  margin-top: 10px;
`;

export const TodayLikeIcon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`;

export const TodayLikeNum = styled.div`
  width: 13px;
  height: 13px;
  font-size: 10px;
`;

export const TodayImage = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TodayProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 140px;
  margin-top: 10px;
`;

export const TodayName = styled.div`
  font-size: 12px;
`;

export const TodayRemarks = styled.div`
  font-size: 12px;
  color: #4f4f4f;
  margin-bottom: 5px;
`;

export const TodayPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const TodayTag = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const ProductButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 1020px;
  padding: 10px;
`;

export const ProductButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 171px;
  height: 52px;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 14px 16px;
  color: #000000;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border: none;
  }
`;

export const StyleInfiniteScroll = styled(InfiniteScroll)`
  /* .infinite-scroll-component {
    background-color: #fed703;
    scrollbar-color: #fed703;
    scrollbar-face-color: rgba(0, 0, 0, 0.2);
  }
  .infinite-scroll-component::-webkit-scrollbar {
    width: 1200px;
  }

  .infinite-scroll-component::-webkit-scrollbar-track {
    background: #fed703;
  }

  .infinite-scroll-component::-webkit-scrollbar-thumb {
    background: #fed703;
    border-radius: 10px;
  }

  .infinite-scroll-component::-webkit-scrollbar-thumb:hover {
    background: #fed703;
  } */
`;

export const InfiniteScrollDiv = styled.div`
  height: 1000px;
  width: 1000px;
  overflow: auto;
`;
