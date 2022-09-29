import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1300px;
  margin: 100px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1100px;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px;
  margin-bottom: 30px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 250px;
`;

export const ProfileImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
`;

export const ProfileDetail = styled.div`
  padding: 10px;
`;

export const ProfileDetailName = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

export const ProfileDetailCreateAt = styled.div`
  font-size: 15px;
  font-weight: 400px;
  line-height: 24px;
  color: #828282;
  padding: 5px;
`;

export const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100px;
`;

export const BoardInfoUrl = styled.button`
  width: 27px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const BoardInfoGps = styled.button`
  width: 27px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1000px;
  padding: 10px;
  border-bottom: 0.5px solid #bdbdbd;
  margin-bottom: 50px;
`;

export const BodyTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1000px;
  padding: 10px;
`;

export const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 130px;
`;

export const ProductRemark = styled.div`
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const ProductName = styled.div`
  height: 36px;
  font-size: 24px;
  font-weight: 700;
  color: #4f4f4f;
`;

export const ProductPrice = styled.div`
  height: 53px;
  font-size: 36px;
  font-weight: 700;
`;

export const ProductLike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LikeIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  height: 27px;
  font-size: 18px;
  font-weight: 500;
`;

export const BodyDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

export const BodyPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyPhoto = styled.img`
  width: 384px;
  height: 384px;
  margin-bottom: 30px;
`;

export const BodyContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #4f4f4f;
`;

export const BodyTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  height: 24px;
  font-size: 16px;
  font-weight: 500px;
  color: #bdbdbd;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 700px;
  margin-bottom: 50px;
`;

export const ProductButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 179px;
  height: 45px;
  padding: 14px 60px;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border-color: #ffffff;
  }
`;
