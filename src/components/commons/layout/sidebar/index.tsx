import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  margin: 100px 0px 100px 100px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  height: 60px;
  font-family: "SDSamliphopangche_Outline";
  border: none;
  background-color: transparent;
  border-radius: 20%;
  font-size: 30px;
  margin-bottom: 30px;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #000;
    color: #ffd600;
  }
`;

export default function LayoutSidebar() {
  const router = useRouter();

  const onClickBuyList = () => {
    router.push("/myPage/buyList");
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={onClickBuyList}>구매목록</Button>
        <Button>판매목록</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
