import styled from "@emotion/styled";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import DaumPostcodeEmbed from "react-daum-postcode";
import "react-quill/dist/quill.snow.css";
import { breakPoints } from "../../../../commons/styles/media";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const AddressModal = styled(Modal)``;

export const AddressSearch = styled(DaumPostcodeEmbed)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 100px 0px;
  padding: 30px 3%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.mobile} {
    margin-left: 5vw;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 53px;
  padding: 50px 0px;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "SDSamliphopangche_Outline";

  @media ${breakPoints.tablet} {
    font-size: 2.4rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 2.3rem;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 10px 0px;
  margin-top: 30px;
`;

export const BodyDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
`;

export const DetailTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 80%;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: black;

  @media ${breakPoints.tablet} {
    width: 85%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const DetailInput = styled.input`
  width: 80%;
  height: 52px;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    width: 85%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
  }

  ::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: start;
  }

  :focus {
    outline: 2px solid #fed703;
  }
`;

export const ContentsReactQuill = styled(ReactQuill)`
  width: 80%;
  height: 320px;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    width: 85%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
  }

  ::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: start;
  }

  :focus {
    outline: 2px solid #fed703;
  }

  .ql-container {
    height: calc(100% - 42px);
  }
`;

export const InputError = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  color: red;
  padding: 3px 0px;
  font-size: 0.8rem;
  width: 80%;

  @media ${breakPoints.tablet} {
    width: 85%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const BodyMap = styled.div`
  display: flex;
  flex-direction: row;

  width: 80%;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    width: 85%;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 90%;
    margin-bottom: 0px;
  }
`;

export const MapLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 280px;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const MapRight = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 280px;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ZipcodeDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const ZipcodeInput = styled.input`
  width: 15%;
  height: 52px;
  margin-right: 5%;

  @media ${breakPoints.tablet} {
    width: 27%;
  }
  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 20px;
`;

export const AddressButton = styled.button`
  width: 20%;
  height: 52px;

  background-color: black;
  color: white;
  cursor: pointer;
  margin-right: 5%;
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    width: 30%;
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    width: 35%;
    font-size: 0.8rem;
  }

  :hover {
    background-color: #fed600;
    color: black;
    border: none;
  }
`;

export const BodyPhoto = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  padding: 10px 0px;
  margin-top: 10px;

  @media ${breakPoints.tablet} {
    width: 85%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
    margin-top: 0px;
  }
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 50%;
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    width: 70%;
  }

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-bottom: 50px;
`;

export const WriteButton = styled.button`
  width: 15%;
  height: 52px;
  border: 1px solid #ffffff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 20%;
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    width: 25%;
    font-size: 0.9rem;
  }
`;
