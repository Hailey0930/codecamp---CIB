import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100vw;
  height: 60px;
  background-color: #fff2ae;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const NavigationButton = styled.button`
  height: 60px;
  font-family: "SDSamliphopangche_Outline";
  border: none;
  background-color: #fff2ae;
  border-radius: 20%;
  font-size: 1.5625rem;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #000;
    color: #ffd600;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;
