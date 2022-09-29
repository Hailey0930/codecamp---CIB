import styled from "@emotion/styled";

export const WrapperBottomComments = styled.div`
  display: flex;
  flex-direction: column;

  width: 1300px;
  margin-top: 30px;
`;

export const CommentsTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100px;
  margin-bottom: 10px;
  margin-left: 50px;
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

  text-align: center;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export const CommentsCreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const CommentsError = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
  margin-left: 50px;
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
  padding: 10px;
  width: 1200px;
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const CommentsCreateButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 1200px;
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
