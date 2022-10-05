import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px 0px;
  width: 90vw;
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
    font-size: 2.3rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 30px;
`;

export const BodyInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 10px 0px;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const BodyTitleInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  margin-bottom: 10px;

  @media ${breakPoints.mobile} {
    width: 90%;
    margin-left: 5%;
  }
`;

export const Title = styled.div`
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const InfoInput = styled.input`
  width: 100%;
  height: 52px;
  ::placeholder {
    font-size: 1rem;
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
  padding: 0px 0.5%;
  font-size: 0.9rem;
`;

export const BodyContents = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px 0px;

  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const ContentsInput = styled.input`
  width: 100%;
  height: 52px;
  margin-bottom: 10px;

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

export const ContentsInputDetail = styled.textarea`
  width: 100%;
  height: 480px;
  margin-bottom: 10px;

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
  }

  :focus {
    outline: 2px solid #fed703;
  }
`;

export const AddressSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 25%;
  height: 52px;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    width: 40%;
  }

  @media ${breakPoints.mobile} {
    justify-content: flex-start;
    width: 70%;
  }
`;

export const ContentsInputAddress = styled.input`
  width: 40%;
  height: 52px;
  border: 1px solid #bdbdbd;

  @media ${breakPoints.mobile} {
    width: 30%;
    margin-right: 5%;
  }

  ::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #c4c4c4;
    line-height: 24px;
    text-align: center;

    @media ${breakPoints.tablet} {
      font-size: 0.9rem;
    }

    @media ${breakPoints.mobile} {
      font-size: 0.9rem;
    }
  }

  :focus {
    outline: 2px solid #fed703;
  }
`;

export const AddressButton = styled.button`
  width: 50%;
  height: 52px;
  font-size: 0.9rem;
  background-color: black;
  color: white;
  cursor: pointer;

  :hover {
    background-color: #fed600;
    color: black;
    border: none;
  }

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }

  @media ${breakPoints.mobile} {
    width: 50%;
    font-size: 0.8rem;
  }
`;

export const BodyTitleInputPhoto = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 30px;
`;

export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    justify-content: space-between;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin: 20px 0px;
`;

export const MutationButton = styled.button`
  width: 15%;
  height: 52px;
  border: 1px solid #ffffff;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "none")};

  @media ${breakPoints.tablet} {
    width: 20%;
  }

  @media ${breakPoints.mobile} {
    width: 35%;
  }
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
