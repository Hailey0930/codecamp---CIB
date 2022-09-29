import styled from "@emotion/styled";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import DaumPostcodeEmbed from "react-daum-postcode";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const AddressModal = styled(Modal)``;

export const AddressSearch = styled(DaumPostcodeEmbed)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px;
  width: 1300px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 53px;
  padding: 50px;
  font-size: 40px;
  font-weight: 700;
  font-family: "SDSamliphopangche_Outline";
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 10px 20px;
  margin-top: 30px;
`;

export const BodyDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const DetailTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 996px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

export const DetailInput = styled.input`
  width: 996px;
  height: 52px;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: start;
  }
  margin-bottom: 10px;
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const ContentsReactQuill = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: start;
  }
  margin-bottom: 50px;
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const InputError = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  color: red;
  padding: 5px;
  font-size: 13px;
  width: 996px;
`;

export const BodyMap = styled.div`
  display: flex;
  flex-direction: row;

  width: 996px;
  margin-bottom: 10px;
`;

export const MapLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 280px;
`;

export const MapRight = styled.div`
  display: flex;
  flex-direction: column;

  width: 588px;
  height: 280px;
`;

export const ZipcodeContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 15px;
  color: #bdbdbd;
`;

export const ZipcodeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 550px;
`;

export const ZipcodeInput = styled.input`
  width: 100px;
  height: 52px;
`;

export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin-top: 20px;
`;

export const AddressButton = styled.button`
  width: 124px;
  height: 52px;

  background-color: black;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #fed600;
    color: black;
    border: none;
  }
`;

export const BodyPhoto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
`;

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 400px;
`;

export const BodyMainSetting = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;
`;

export const SettingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 230px;
`;

export const SettingBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100px;
`;

export const SettingButton = styled.input`
  width: 20px;
  height: 20px;
  background-color: #ffd600;
`;

export const SettingTitle = styled.div`
  width: 60px;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 500px;
  padding: 20px 30px 50px 30px;
  margin-bottom: 50px;
`;

export const WriteButton = styled.button`
  width: 179px;
  height: 52px;
  padding: 10px 60px;
  border: 1px solid #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;
