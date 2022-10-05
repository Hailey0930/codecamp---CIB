import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const WrapperBottomComments = styled.div`
  display: flex;
  flex-direction: column;

  width: 90vw;

  @media ${breakPoints.mobile} {
    margin-left: 5vw;
  }
`;

export const CommentsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 7%;

  @media ${breakPoints.tablet} {
    width: 10%;
  }

  @media ${breakPoints.mobile} {
    width: 25%;
  }
`;

export const CommentsTitleIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 10%;
  margin-left: 5%;

  @media ${breakPoints.mobile} {
    margin-left: 7%;
  }
`;

export const CommentsTitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70%;
  height: 30px;
  text-align: center;
  font-size: 1.2rem;
`;

export const CommentsCreate = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const CommentsCreateInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 35%;
  padding: 10px 0px;

  @media ${breakPoints.tablet} {
    width: 40%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const CreateInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media ${breakPoints.mobile} {
    margin-right: 3%;
  }
`;

export const CommentsError = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
  width: 100%;
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    font-size: 0.6rem;
  }
`;

export const CommentsInfoUser = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid gray;
  ::placeholder {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    color: #828282;
  }
  :focus {
    outline: 2px solid #fed703;
  }
`;
export const CommentsInfoPassword = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid gray;
  ::placeholder {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    color: #828282;
  }
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const CommentsInfoRating = styled(Rate)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const CommentsCreateContents = styled.textarea`
  height: 140px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0.5%;
  width: 100%;

  ::placeholder {
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    color: #828282;

    @media ${breakPoints.mobile} {
      font-size: 0.8rem;
    }
  }

  :focus {
    outline: 2px solid #fed703;
  }
`;

export const CommentsCreateButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border: 1px solid #bdbdbd;
  border-top: 1px solid #f2f2f2;
`;

export const CommentsCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 20%;
  height: 24px;
  margin-left: 0.5%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  color: #bdbdbd;
`;

export const CommentsButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10%;
  height: 52px;
  padding: 14px 0px;
  font-size: 1rem;
  background-color: #000000;
  color: white;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 15%;
  }

  @media ${breakPoints.mobile} {
    width: 20%;
    font-size: 0.8rem;
  }

  :hover {
    background-color: #fed703;
    color: black;
    border: none;
  }
`;
