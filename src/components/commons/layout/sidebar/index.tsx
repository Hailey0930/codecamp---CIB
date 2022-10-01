import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  width: 20%;
  margin: 100px 0px;
  margin-right: 2.5%;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 100px;
    margin-top: 50px;
    margin-left: 5%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 0px;
  }
`;

const Button = styled.button`
  height: 60px;
  font-family: "SDSamliphopangche_Outline";
  border: none;
  background-color: transparent;
  border-radius: 20%;
  font-size: 2rem;
  margin-bottom: 50px;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #000;
    color: #ffd600;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.7rem;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 0px;
    font-size: 1.5rem;
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
