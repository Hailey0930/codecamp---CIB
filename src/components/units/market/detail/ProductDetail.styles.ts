import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  margin: 100px 0px;
  padding: 30px 0px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.mobile} {
    margin-left: 5vw;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 90%;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px 1%;
  margin-bottom: 30px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 25%;

  @media ${breakPoints.tablet} {
    width: 30%;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const ProfileImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 27%;
  height: 70px;
  margin-right: 10%;
`;

export const ProfileDetail = styled.div`
  padding: 10px 0px;
`;

export const ProfileDetailName = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 36px;
`;

export const ProfileDetailCreateAt = styled.div`
  font-size: 1rem;
  font-weight: 400px;
  line-height: 24px;
  color: #828282;
  padding: 5px 0px;
`;

export const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 10%;

  @media ${breakPoints.tablet} {
    width: 15%;
  }

  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const BoardInfoUrl = styled.button`
  width: 30%;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const BoardInfoGps = styled.button`
  width: 30%;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  padding: 10px 1%;
  border-bottom: 0.5px solid #bdbdbd;
  margin-bottom: 50px;
`;

export const BodyTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 10px 1%;
`;

export const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 130px;
`;

export const ProductRemark = styled.div`
  height: 27px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #bdbdbd;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const ProductName = styled.div`
  height: 36px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f4f4f;

  @media ${breakPoints.tablet} {
    font-size: 1.4rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const ProductPrice = styled.div`
  height: 53px;
  font-size: 2.25rem;
  font-weight: 700;

  @media ${breakPoints.tablet} {
    font-size: 2.1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;

export const ProductLike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 5%;

  @media ${breakPoints.tablet} {
    width: 7%;
  }

  @media ${breakPoints.mobile} {
    width: 10%;
  }
`;

export const LikeIcon = styled.div`
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  height: 27px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;

  @media ${breakPoints.tablet} {
    font-size: 1.1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const BodyDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
  width: 100%;
`;

export const BodyPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const BodyPhoto = styled.img`
  width: 40%;
  height: 384px;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
    height: 350px;
  }
`;

export const BodyContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #4f4f4f;

  @media ${breakPoints.tablet} {
    font-size: 1.4rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const BodyTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  height: 24px;
  font-size: 1rem;
  font-weight: 500px;
  color: #bdbdbd;
  margin-top: 10px;
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.85rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 60%;
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    width: 70%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ProductButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 45px;
  padding: 14px 0px;
  font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border-color: #ffffff;
  }

  @media ${breakPoints.tablet} {
    width: 30%;
  }

  @media ${breakPoints.mobile} {
    width: 40%;
    font-size: 0.9rem;
  }
`;
