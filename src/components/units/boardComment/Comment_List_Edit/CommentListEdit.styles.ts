import styled from "@emotion/styled";
import { Modal, Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const CommentsListDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 90vw;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px 0px;
`;

export const CommentsDetailImage = styled.img`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  width: 5%;
  height: 60px;
  margin-right: 1%;

  @media ${breakPoints.tablet} {
    width: 7%;
  }

  @media ${breakPoints.mobile} {
    width: 12%;
    height: 50px;
    margin-right: 3%;
  }
`;

export const CommentsDetailMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 85%;
  padding: 10px 1%;

  @media ${breakPoints.tablet} {
    width: 80%;
  }

  @media ${breakPoints.mobile} {
    width: 60%;
    margin-right: 5%;
  }
`;

export const CommentsDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 30%;
  margin-bottom: 5px;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const DetailInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 30%;
  height: 24px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
`;

export const DetailInfoRating = styled(Rate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 65%;
  height: 20px;
`;

export const CommentsDetailContents = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const CommentsDetailDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 60%;
  height: 18px;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 18px;
  color: #bdbdbd;
`;

export const CommentsDetailButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 10%;
  height: 100px;

  @media ${breakPoints.tablet} {
    width: 10%;
  }

  @media ${breakPoints.mobile} {
    width: 20%;
  }
`;

export const DetailButtonEdit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 30px;
  margin-top: 5px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 40%;
  }

  @media ${breakPoints.mobile} {
    width: 45%;
  }
`;

export const DetailButtonDelete = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 30px;
  margin-top: 5px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 40%;
  }

  @media ${breakPoints.mobile} {
    width: 45%;
  }
`;

export const PasswordModal = styled(Modal)``;

export const ModalPasswordInput = styled.input``;

export const DetailInfoPassword = styled.input`
  width: 100px;
  border: 1px solid #bdbdbd;
  ::placeholder {
    text-align: center;
  }
`;

export const CommentsDetailContentsEdit = styled.div``;

export const CommentWriteContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: 30px;
`;
