import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1300px;
  margin: 100px 100px 100px 50px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1000px;
  font-size: 70px;
  font-weight: 400px;
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: "SBAggroB";
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1000px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 100px;
  border: 3px dashed #ffd600;
  padding: 20px;
`;

export const ProductListBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;
  padding: 10px;
  cursor: pointer;
`;

export const MapDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 950px;
  margin-bottom: 20px;
  margin-left: 10px;
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
