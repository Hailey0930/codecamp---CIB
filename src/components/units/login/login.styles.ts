import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90vw;
  margin: 100px 0px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.mobile} {
    margin-left: 5vw;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  font-size: 4.375rem;
  font-weight: 400px;
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: "SBAggroB";
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;

  @media ${breakPoints.tablet} {
    font-size: 4.1rem;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
    font-size: 4rem;
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10%;
  margin-bottom: 100px;
  border: 3px dashed #ffd600;

  @media ${breakPoints.mobile} {
    box-shadow: none;
    border: none;
  }
`;

export const Image = styled.img`
  width: 30%;
  height: 300px;
  margin-top: 70px;

  @media ${breakPoints.tablet} {
    width: 40%;
    height: 250px;
  }

  @media ${breakPoints.mobile} {
    width: 60%;
    height: 200px;
    margin-top: 50px;
  }
`;

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  margin-top: 50px;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    width: 60%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px 0px;
`;

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 20%;
  font-size: 1.5625rem;
  font-family: "SBAggroB";
  color: #ffd600;

  @media ${breakPoints.mobile} {
    width: 10%;
    font-size: 1.3rem;
  }
`;

export const LoginInput = styled.input`
  width: 70%;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 1.5625rem;
  padding: 10px 0px;

  :focus {
    outline: none;
    background-color: #fff2ae;
  }

  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 70%;
  font-size: 1rem;
  color: red;
  margin-left: 30%;

  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 0.8rem;
    margin-left: 20%;
  }
`;

export const LoginButton = styled.button`
  width: 50%;
  height: 50px;
  font-family: "SDSamliphopangche_Outline";
  font-size: 1.5625rem;
  background-color: #fff2ae;
  border: none;
  color: black;
  margin-top: 70px;
  text-shadow: 1px 1px 1px #ffd600;
  border-radius: 10px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 1.3rem;
  }

  :hover {
    background-color: #ffd600;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 45%;
  margin-top: 30px;
  margin-bottom: 70px;

  @media ${breakPoints.tablet} {
    width: 60%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const FooterButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: black;
  text-shadow: 1px 1px 1px #ffd600;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.85rem;
  }

  :hover {
    color: #ffd600;
  }
`;
