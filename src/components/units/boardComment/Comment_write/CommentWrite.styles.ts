import styled from "@emotion/styled";
import { Rate } from "antd";

export const WrapperBottomComments = styled.div`
  display: flex;
  flex-direction: column;

  width: 1300px;
  padding: 30px 30px 10px 30px;
  margin-left: 100px;
`;

export const CommentsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 70px;
`;

export const CommentsTitleIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20px;
  height: 27px;
`;

export const CommentsTitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 34px;
  height: 27px;
  text-align: center;
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

  width: 500px;
  padding: 10px 0px;
`;

export const CreateInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsError = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
`;

export const CommentsInfoUser = styled.input`
  width: 150px;
  height: 30px;
  border: 1px solid gray;
  ::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #828282;
  }
  :focus {
    outline: 2px solid #fed703;
  }
`;
export const CommentsInfoPassword = styled.input`
  width: 150px;
  height: 30px;
  border: 1px solid gray;
  ::placeholder {
    font-size: 16px;
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
  width: 140px;
  height: 30px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const CommentsCreateContents = styled.textarea`
  ::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #828282;
  }
  height: 140px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0px;
  width: 1250px;
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const CommentsCreateButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 1250px;
  border: 1px solid #bdbdbd;
  border-top: 1px solid #f2f2f2;
`;

export const CommentsCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 43px;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #bdbdbd;
`;

export const CommentsButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 91px;
  height: 52px;
  padding: 14px 16px;
  background-color: #000000;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    color: black;
    border: none;
  }
`;
