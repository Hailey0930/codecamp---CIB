import styled from "@emotion/styled";

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
  width: 300px;
  height: 300px;
  margin-top: 70px;
`;

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 800px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 500px;
  padding: 10px;
`;

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100px;
  font-size: 25px;
  font-family: "SBAggroB";
  color: #ffd600;
  margin-right: 20px;
`;

export const LoginInput = styled.input`
  width: 270px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 25px;
  padding: 10px;

  :focus {
    outline: none;
    background-color: #fff2ae;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 200px;
  font-size: 12px;
  margin-left: 110px;
  color: red;
`;

export const LoginButton = styled.button`
  width: 250px;
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

export const LoginFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 500px;
  margin-top: 10px;
  margin-bottom: 70px;
`;

export const FooterButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-shadow: 1px 1px 1px #ffd600;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;
