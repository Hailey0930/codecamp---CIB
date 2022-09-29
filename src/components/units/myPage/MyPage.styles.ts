import styled from "@emotion/styled";
import Modal from "react-modal";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1300px;
  margin: 100px 100px 100px 50px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1000px;
  font-size: 70px;
  font-weight: 400px;
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: "SBAggroB";
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1000px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10%;
  margin-bottom: 100px;
  border: 3px dashed #ffd600;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 70px;
`;

export const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 800px;
  margin-top: 50px;
  margin-bottom: 70px;
`;

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 500px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const ProfileTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100px;
  font-size: 25px;
  font-family: "SBAggroB";
  color: #ffd600;
  margin-right: 20px;
`;

export const ProfileContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 300px;
  height: 30px;
  font-size: 25px;
`;

export const UpdateButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 50px;
  font-family: "SDSamliphopangche_Outline";
  font-size: 25px;
  background-color: #fff2ae;
  border: none;
  color: black;
  margin-top: 30px;
  text-shadow: 1px 1px 1px #ffd600;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
  }
`;

export const ModalStyle = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 464px;
  height: 316px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: #ffffff;
  margin-top: 250px;
  margin-left: 500px;
`;

export const ModalCloseButton = styled.button`
  width: 16px;
  height: 16px;

  background-color: transparent;
  border: none;
  margin: 20px 0px 20px 400px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 464px;
  height: 29px;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ModalSelect = styled.select`
  width: 384px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #000000;
  margin-bottom: 30px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #828282;
  }
`;

export const ModalButton = styled.button`
  width: 384px;
  height: 51px;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "#bdbdbd")};
  border: none;
  color: ${(props) => (props.isActive ? "black" : "white")};
  border-radius: 10px;
  padding: 14px 16px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;
