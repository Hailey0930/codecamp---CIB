import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface IPaginationStylesProps {
  isActive?: boolean;
}

export const PageMoveButton = styled.button`
  width: 10%;
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: 500;

  @media ${breakPoints.tablet} {
    width: 15%;
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    width: 8%;
    font-size: 0.5rem;
  }
`;

export const PageButton = styled.button`
  width: 10%;
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: ${(props: IPaginationStylesProps) =>
    props.isActive ? 550 : 400};
  color: ${(props: IPaginationStylesProps) =>
    props.isActive ? "#FFD600" : "black"};

  @media ${breakPoints.tablet} {
    width: 15%;
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    width: 8%;
    font-size: 0.5rem;
  }
`;
