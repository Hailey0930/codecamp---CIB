import styled from "@emotion/styled";
import { DatePicker } from "antd";
import { breakPoints } from "../../../../commons/styles/media";
import { ITokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  margin: 100px 0px;
  padding: 30px 3%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const WrapperHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 42px;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 42px;
  color: black;
  padding: 10px 5%;
  margin-bottom: 30px;
  font-family: "SDSamliphopangche_Outline";

  @media ${breakPoints.tablet} {
    width: 60%;
    font-size: 2.3rem;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
    font-size: 2rem;
  }
`;

export const WrapperHeaderBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 95%;
  height: 260px;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    width: 100%;
    justify-content: space-around;
  }
`;

export const HeaderBoardMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 22%;
  height: 250px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    height: 230px;
  }

  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

export const HeaderBoardPhoto = styled.img`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 110px;
`;

export const HeaderBoardContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const HeaderBoardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.125rem;
  font-weight: 500;
  line-height: 27px;
  padding: 10px 5%;
  margin-top: 10px;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.6rem;
  }
`;

export const HeaderBoardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 5px 5%;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const HeaderBoardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardInfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    margin-bottom: 5px;
  }
`;

export const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: row;

  width: 18%;
  height: 20px;
  margin-right: 3%;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: row;

  width: 70%;
  height: 24px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const BoardInfoDate = styled.div`
  height: 18px;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 18px;
  color: #828282;
`;

export const HeaderBoardLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 50px;
`;

export const BoardLikeThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 18px;
`;

export const BoardLikeNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 24px;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 24px;
  color: #000000;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  padding: 0px 1.5%;
  height: 55px;
  margin-bottom: 20px;
`;

export const WrapperSearchInput = styled.input`
  width: 60%;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: none;
  ::placeholder {
    width: 60%;
    height: 24px;
    padding: 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    color: gray;
  }
  :focus {
    outline: 2px solid #fed703;
  }

  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;

const { RangePicker } = DatePicker;
export const RangePickerStyle = styled(RangePicker)`
  width: 23%;
  height: 52px;
  font-size: 1.125rem;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const WrapperSearchButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 10%;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border: none;
    color: black;
  }

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    width: 15%;
    font-size: 0.8rem;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;
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

  width: 100%;
  height: 52px;
  border: none;
`;

export const BodyHeadColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 15%;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
  color: black;
`;

export const BodyHeadWriter = styled.div`
  display: flex;
  flex-direction: column;

  width: 15%;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
  color: black;

  @media ${breakPoints.tablet} {
    width: 13%;
    font-size: 1.125rem;
    margin-right: 9%;
  }

  @media ${breakPoints.mobile} {
    width: 13%;
    font-size: 1rem;
    margin-right: 9%;
  }
`;

export const BodyHeadDate = styled.div`
  display: flex;
  flex-direction: column;

  width: 15%;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
  color: black;

  @media ${breakPoints.tablet} {
    width: 13%;
    font-size: 1.125rem;
  }

  @media ${breakPoints.mobile} {
    width: 13%;
    font-size: 1rem;
  }
`;

export const BodyHeadColumnTitle = styled.div`
  display: flex;
  flex-direction: column;

  width: 55%;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 27px;
  color: black;

  @media ${breakPoints.mobile} {
    width: 45%;
  }
`;

export const WrapperBodyList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 52px;
  border: none;
  border-top: 1px solid #bdbdbd;
`;

export const BodyListColumn = styled.div`
  width: 15%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;

  :hover {
    color: blue;
  }

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.7rem;
  }
`;

export const BodyListWriter = styled.div`
  width: 15%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;

  :hover {
    color: blue;
  }

  @media ${breakPoints.tablet} {
    width: 12%;
    font-size: 0.8rem;
  }

  @media ${breakPoints.mobile} {
    width: 12%;
    font-size: 0.7rem;
  }
`;

export const BodyListDate = styled.div`
  width: 15%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;

  :hover {
    color: blue;
  }

  @media ${breakPoints.tablet} {
    width: 20%;
    font-size: 0.8rem;
    margin-left: 3%;
  }

  @media ${breakPoints.mobile} {
    width: 20%;
    margin-left: 3%;
    font-size: 0.7rem;
  }
`;

export const BodyListColumnTitle = styled.div`
  width: 55%;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  color: #4f4f4f;

  :hover {
    color: blue;
  }

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }

  @media ${breakPoints.mobile} {
    width: 45%;
    font-size: 0.6rem;
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
  justify-content: space-between;

  width: 100%;
  height: 55px;
  padding: 0px 2.5%;
`;

export const WrapperBottomPageSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 80%;

  @media ${breakPoints.tablet} {
    width: 75%;
  }

  @media ${breakPoints.mobile} {
    width: 75%;
  }
`;

export const WrapperBottomWriteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 15%;
  height: 52px;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border: none;
  }

  @media ${breakPoints.tablet} {
    width: 20%;
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    width: 23%;
    font-size: 0.7rem;
  }
`;
