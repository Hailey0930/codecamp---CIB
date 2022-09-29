import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 1800px;
  height: 60px;
  background-color: #fff2ae;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 900px;
`;

const NavigationButton = styled.button`
  height: 60px;
  font-family: "SDSamliphopangche_Outline";
  border: none;
  background-color: #fff2ae;
  border-radius: 20%;
  font-size: 25px;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #000;
    color: #ffd600;
  }
`;

const NAVIGATION_MENU = [
  { name: "Info", page: "/info" },
  { name: "Freeboard", page: "/boards" },
  { name: "Market", page: "/market" },
  { name: "My Page", page: "/myPage" },
];

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) router.push(event.target.id);
  };

  return (
    <Wrapper>
      {NAVIGATION_MENU.map((el) => (
        <ButtonDiv key={el.page}>
          <NavigationButton id={el.page} onClick={onClickMenu}>
            {el.name}
          </NavigationButton>
        </ButtonDiv>
      ))}
    </Wrapper>
  );
}
