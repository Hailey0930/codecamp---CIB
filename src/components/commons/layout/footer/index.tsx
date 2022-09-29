import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 1800px;
  height: 60px;
  background-color: #fff2ae;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 60px;
  font-family: "SBAggroB";
  font-size: 30px;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
  margin-left: 1550px;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <FooterDiv>귀여운게 최고야!</FooterDiv>
    </Wrapper>
  );
}
