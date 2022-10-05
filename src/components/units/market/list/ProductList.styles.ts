import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { breakPoints } from "../../../../commons/styles/media";
import { DatePicker } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;
  margin: 100px 0px;
  padding: 30px 3%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.mobile} {
    margin-left: 5vw;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const WrapperHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 50%;
  height: 42px;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 42px;
  color: black;
  padding: 10px 5%;
  margin-bottom: 30px;
  font-family: "SDSamliphopangche_Outline";

  @media ${breakPoints.tablet} {
    width: 60%;
    font-size: 2.3rem;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const WrapperHeaderProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 95%;
  height: 260px;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const HeaderProductMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 22%;
  height: 250px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    height: 230px;
  }

  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

export const HeaderProductPhoto = styled.img`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 110px;
`;

export const HeaderProductContents = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const HeaderProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 27px;
  padding: 10px 5%;
  margin-top: 5px;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const HeaderProductBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0px 5%;
`;

export const ProductBottomDetail = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
`;

export const HeaderProductRemarks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 0.6rem;
  color: #4f4f4f;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    font-size: 0.5rem;
  }
`;

export const HeaderProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 28px;
  font-size: 1rem;
  font-weight: 700;
  color: #000000;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const ProductLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductLikeIcon = styled.div`
  height: 18px;
  margin-bottom: 5px;
`;

export const ProductLikeCount = styled.div`
  height: 24px;
  font-size: 1rem;
  font-weight: 400;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;

  width: 100%;
  padding: 10px 2.5%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 25%;

  @media ${breakPoints.tablet} {
    width: 30%;
  }

  @media ${breakPoints.mobile} {
    width: 60%;
    margin-bottom: 10px;
  }
`;

export const SellingButton = styled.button`
  width: 45%;
  height: 27px;
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  border: none;
  text-align: start;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    width: 50%;
    font-size: 0.9rem;
  }
`;

export const SoldOutButton = styled.button`
  width: 45%;
  height: 27px;
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  border: none;
  text-align: start;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    width: 50%;
    font-size: 0.9rem;
  }
`;

export const SearchBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 65%;

  @media ${breakPoints.tablet} {
    width: 65%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const WrapperSearchInput = styled.input`
  width: 45%;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  padding: 1%;

  ::placeholder {
    width: 100%;
    height: 24px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    color: gray;
  }
  :focus {
    outline: 2px solid #fed703;
  }

  @media ${breakPoints.tablet} {
    width: 45%;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

const { RangePicker } = DatePicker;
export const RangePickerStyle = styled(RangePicker)`
  width: 25%;
  height: 52px;
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    width: 25%;
    font-size: 0.7rem;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SearchButton = styled.button`
  width: 15%;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 17%;
    font-size: 0.8rem;
  }

  @media ${breakPoints.mobile} {
    width: 25%;
    font-size: 0.8rem;
  }

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

  width: 95%;
  padding: 10px 0px;
  margin-left: 2.5%;
`;

export const ProductListBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 15px 1%;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const ProductLeft = styled.div`
  display: flex;
  flex-direction: row;

  width: 75%;
`;

export const ProductPhoto = styled.img`
  width: 23%;
  height: 160px;
  margin-right: 3%;

  @media ${breakPoints.tablet} {
    width: 30%;
  }

  @media ${breakPoints.mobile} {
    width: 35%;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;

  @media ${breakPoints.tablet} {
    width: 60%;
  }

  @media ${breakPoints.mobile} {
    width: 55%;
  }
`;

export const ProductTitle = styled.div`
  height: 36px;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;

  @media ${breakPoints.tablet} {
    font-size: 1.3rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
  }
`;

export const ProductRemarks = styled.div`
  height: 24px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #4f4f4f;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    font-size: 1.1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const ProductTag = styled.div`
  height: 24px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: #bdbdbd;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const WrapperSeller = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 30%;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 65%;
  }
`;

export const ProfileImage = styled.img`
  width: 17%;
  height: 30px;
  margin-right: 5%;

  @media ${breakPoints.tablet} {
    width: 20%;
  }

  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const SellerName = styled.div`
  width: 70%;
  height: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #4f4f4f;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const LikeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 30%;
  height: 30px;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const LikeIcon = styled.div`
  width: 17%;
  height: 30px;
  margin-right: 5%;

  @media ${breakPoints.tablet} {
    width: 20%;
  }

  @media ${breakPoints.mobile} {
    width: 55%;
    margin-right: 10%;
  }
`;

export const LikeCount = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: #4f4f4f;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const ProductRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 25%;
`;

export const PriceIcon = styled.div`
  height: 40px;
  margin-right: 3%;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Price = styled.div`
  height: 36px;
  font-size: 1.4rem;
  font-weight: 700;

  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const TodayDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
  height: 1000px;
  border: 1px solid #bdbdbd;
  overflow: auto;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TodayTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 27px;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TodayProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  margin-left: 2.5%;
  cursor: pointer;
`;

export const TodayLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 13px;
  margin-top: 10px;
`;

export const TodayLikeIcon = styled.div`
  width: 10%;
  height: 13px;
  margin-right: 7%;
`;

export const TodayLikeNum = styled.div`
  height: 13px;
  font-size: 0.7rem;
  text-align: center;
  margin-right: 3%;
`;

export const TodayImage = styled.img`
  width: 50%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TodayProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 0px 2%;
  margin-top: 10px;
`;

export const TodayName = styled.div`
  font-size: 0.8rem;
`;

export const TodayRemarks = styled.div`
  font-size: 0.75rem;
  color: #4f4f4f;
  margin-bottom: 5px;
`;

export const TodayPrice = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const TodayTag = styled.div`
  font-size: 0.6rem;
  font-weight: 500;
  color: #bdbdbd;
`;

export const ProductButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  padding: 10px 2.5%;
`;

export const ProductButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 17%;
  height: 52px;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 1rem;
  color: #000000;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 23%;
  }

  @media ${breakPoints.mobile} {
    width: 43%;
    font-size: 0.9rem;
  }

  :hover {
    background-color: #fed703;
    border: none;
  }
`;

export const StyleInfiniteScroll = styled(InfiniteScroll)`
  width: 95%;
`;

export const InfiniteScrollDiv = styled.div`
  height: 1000px;
  width: 100%;
  overflow: auto;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
