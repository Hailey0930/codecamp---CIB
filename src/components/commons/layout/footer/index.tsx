import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100vw;
  height: 60px;
  background-color: #fff2ae;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 60px;
  font-family: "SBAggroB";
  font-size: 1.875rem;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
  margin-right: 5%;

  @media ${breakPoints.tablet} {
    font-size: 1.8rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <FooterDiv>귀여운게 최고야!</FooterDiv>
    </Wrapper>
  );
}
