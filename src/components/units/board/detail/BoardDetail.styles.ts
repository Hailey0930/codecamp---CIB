import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 50px 0px;
  margin: 100px 0px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.tablet} {
    width: 90%;
    margin-left: 5%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
    margin-left: 5%;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 80%;
  border-bottom: 1px solid #bdbdbd;
  padding: 15px 1%;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 45%;

  @media ${breakPoints.tablet} {
    width: 70%;
  }

  @media ${breakPoints.mobile} {
    width: 75%;
  }
`;

export const ProfileImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 15%;
  height: 70px;

  @media ${breakPoints.tablet} {
    width: 20%;
  }

  @media ${breakPoints.mobile} {
    width: 20%;
  }
`;

export const ProfileDetail = styled.div`
  padding: 10px 3%;
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
  padding: 5px;
`;

export const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 15%;

  @media ${breakPoints.tablet} {
    width: 17%;
  }

  @media ${breakPoints.mobile} {
    width: 25%;
  }
`;

export const BoardInfoUrl = styled.button`
  width: 7%;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const BoardInfoGps = styled.button`
  width: 7%;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  padding: 15px 1%;
  margin: 30px 0px;
`;

export const BoardDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 100px;
`;

export const BoardDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  padding: 0px 2%;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 53px;
  margin-bottom: 15px;

  @media ${breakPoints.tablet} {
    font-size: 2.3rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;

export const BoardDetailImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  margin-bottom: 15px;
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 480px;
  margin-bottom: 15px;

  @media ${breakPoints.tablet} {
    height: 400px;
  }

  @media ${breakPoints.mobile} {
    height: 300px;
  }
`;

export const BoardDetailContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  padding: 0px 2%;
  font-size: 1.5625rem;
  font-weight: 400;
  line-height: 24px;
  margin-top: 10px;

  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.4rem;
  }
`;

export const BoardYoutubeUrl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 300px;
  margin-bottom: 100px;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
    height: 230px;
  }
`;

export const BoardReaction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 30%;
  padding: 10px 1%;
`;

export const BoardReactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardReactionLikeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #ffd600;

  :hover {
    color: blue;
  }
`;

export const BoardReactionLikeText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 60%;
  height: 27px;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
`;

export const BoardReactionDislikeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 60%;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #828282;

  :hover {
    color: blue;
  }
`;

export const BoardReactionDislikeText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 60%;
  height: 27px;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: #828282;
`;

export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 50px 0px;
`;

export const WrapperBottomButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 15%;
  height: 45px;
  font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border-color: #ffffff;
  }

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    width: 25%;
    font-size: 0.9rem;
  }
`;
