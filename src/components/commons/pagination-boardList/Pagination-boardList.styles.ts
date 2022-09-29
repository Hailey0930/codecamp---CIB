import styled from "@emotion/styled";

interface IPaginationStylesProps {
  isActive?: boolean;
}

export const PageMoveButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0px 10px;
  font-weight: 500;
`;

export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0px 10px;
  font-weight: ${(props: IPaginationStylesProps) =>
    props.isActive ? 550 : 400};
  color: ${(props: IPaginationStylesProps) =>
    props.isActive ? "#FFD600" : "black"};
`;
