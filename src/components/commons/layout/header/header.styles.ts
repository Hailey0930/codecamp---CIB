import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 15%;
  height: 80px;
  margin-left: 5%;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 20%;
  }

  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const Image = styled.img`
  width: 35%;
  height: 60px;
  margin-right: 3%;

  @media ${breakPoints.tablet} {
    width: 40%;
    height: 50px;
  }

  @media ${breakPoints.mobile} {
    width: 35%;
    height: 40px;
  }
`;

export const PageName = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 60%;
  height: 60px;
  font-family: "SBAggroB";
  font-size: 3.125rem;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;

  :hover {
    color: #000;
    text-shadow: 1px 1px 1px #ffd600;
  }

  @media ${breakPoints.tablet} {
    width: 45%;
    font-size: 2.5rem;
  }

  @media ${breakPoints.mobile} {
    width: 45%;
    font-size: 2.3rem;
  }
`;

export const WrapperUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 40%;
  height: 80px;
  margin-right: 5%;

  @media ${breakPoints.tablet} {
    width: 35%;
  }

  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const Login = styled.button`
  height: 60px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 1.5625rem;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
  margin-right: 5%;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #ffd600;
    color: #000;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const SignUp = styled.button`
  height: 60px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 1.5625rem;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #ffd600;
    color: #000;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`;

export const InfoName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 50px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 1.4375rem;
  color: #000;
  text-shadow: 1px 1px 1px #ffd600;

  @media ${breakPoints.tablet} {
    font-size: 1.35rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 50px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;

  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
  }
`;
