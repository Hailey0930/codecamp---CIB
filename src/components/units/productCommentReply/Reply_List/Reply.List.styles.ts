import styled from "@emotion/styled";

export const CommentsListDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 1100px;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px;
  margin-left: 90px;
`;

export const CommentsDetailImage = styled.img`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  width: 60px;
  height: 60px;
`;

export const CommentsDetailMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 1100px;
  height: 100px;
  padding: 10px;
`;

export const CommentsDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 320px;
  margin-bottom: 5px;
`;

export const DetailInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CommentsDetailContents = styled.div`
  width: 800px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const CommentsDetailDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 100px;
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #bdbdbd;
`;

export const CommentsDetailButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 70px;
  height: 100px;
  margin-right: 10px;
`;

export const DetailButtonAnswer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  margin-top: 5px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const DetailButtonEdit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  margin-top: 5px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const DetailButtonDelete = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  margin-top: 5px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;
