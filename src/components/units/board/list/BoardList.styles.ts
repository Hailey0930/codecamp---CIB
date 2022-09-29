import styled from "@emotion/styled";
import { ITokenProps } from "./BoardList.types";

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
  flex-direction: column;
  align-items: center;
`;

export const WrapperHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 350px;
  height: 42px;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
  color: black;
  padding: 10px;
  margin-bottom: 30px;
  font-family: "SDSamliphopangche_Outline";
`;

export const WrapperHeaderBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;
  height: 260px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const HeaderBoardMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 270px;
  height: 230px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

export const HeaderBoardPhoto = styled.div`
  display: flex;
  flex-direction: column;

  width: 270px;
  height: 130px;
`;

export const HeaderBoardContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 270px;
  height: 130px;
`;

export const HeaderBoardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 27px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  padding: 10px;
  margin-top: 10px;
`;

export const HeaderBoardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 5px;
`;

export const HeaderBoardInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 5px;
`;

export const BoardInfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: row;

  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: row;

  width: 45px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const BoardInfoDate = styled.div`
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #828282;
  padding: 0px 3px;
`;

export const HeaderBoardLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 40px;
  height: 60px;
`;

export const BoardLikeThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20px;
  height: 18px;
`;

export const BoardLikeNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 27px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 1200px;
  height: 55px;
  margin-bottom: 20px;
`;

export const WrapperSearchInput = styled.input`
  width: 776px;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  ::placeholder {
    width: 141px;
    height: 24px;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: gray;
  }
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const WrapperSearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  padding: 14px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border: none;
    color: black;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1200px;
  height: 583px;
  background-color: #ffffff;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-bottom: 25px;
`;

export const WrapperBodyHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 1200px;
  height: 52px;
  border: none;
`;

export const BodyHeadColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 15%;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
  color: black;
`;

export const BodyHeadColumnTitle = styled.div`
  display: flex;
  flex-direction: column;

  width: 55%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: black;
`;

export const WrapperBodyList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 1200px;
  height: 52px;
  border: none;
  border-top: 1px solid #bdbdbd;
`;

export const BodyListColumn = styled.div`
  width: 15%;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;

  :hover {
    color: blue;
  }
`;

export const BodyListColumnTitle = styled.div`
  width: 55%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4f4f4f;

  :hover {
    color: blue;
  }
`;

export const Token = styled.span`
  background-color: ${(props: ITokenProps) =>
    props.isMatched ? "#FFF2AE" : "none"};
  font-weight: ${(props: ITokenProps) => (props.isMatched ? "600" : "400")};
`;

export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 1200px;
  height: 55px;
`;

export const WrapperBottomPageSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 1000px;
  padding: 10px 10px 10px 230px;
`;

export const PageSelectButtonMove = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 40px;
  height: 40px;
  background-color: #ffffff;
  color: black;
  border: none;
  cursor: pointer;
`;

export const PageSelectButtonNum = styled.button`
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #4f4f4f;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const WrapperBottomWriteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 171px;
  height: 52px;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 14px 16px;
  color: #000000;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border: none;
  }
`;
