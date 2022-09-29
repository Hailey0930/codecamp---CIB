import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

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
  height: 1400px;
  padding: 10px 20px;
  margin-top: 30px;
`;

export const BodyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 10px;
`;

export const BodyTitleInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoInput = styled.input`
  width: 486px;
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

export const InputError = styled.div`
  color: red;
  padding: 5px;
  font-size: 13px;
`;

export const BodyContents = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px;
`;

export const ContentsInput = styled.input`
  width: 100%;
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

export const ContentsInputdetail = styled.textarea`
  width: 100%;
  height: 480px;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
  }
  margin-bottom: 10px;
  :focus {
    outline: 2px solid #fed703;
  }
`;

export const AddressSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 220px;
  height: 52px;
  margin-bottom: 20px;
`;

export const ContentsInputAddress = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: start;
  }
  :focus {
    outline: 2px solid #fed703;
  }
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

export const BodyTitleInputPhoto = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  margin-bottom: 30px;
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 78px;
`;

export const PhotoButton = styled.button`
  width: 78px;
  height: 78px;
  cursor: pointer;
`;

export const BodyTitleInputMainSetting = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
`;
export const MainSetting = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const MainSettingRadio = styled.input``;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 500px;
  padding: 20px 30px 50px 30px;
`;

export const MutationButton = styled.button`
  width: 179px;
  height: 52px;
  padding: 10px 60px;
  border: 1px solid #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "none")};
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
