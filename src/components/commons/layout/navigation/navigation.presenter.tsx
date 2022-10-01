import * as S from "./navigation.styles";
import { INavigationPresenterProps } from "./navigation.types";

export default function NavigationPresenter(props: INavigationPresenterProps) {
  const NAVIGATION_MENU = [
    { name: "Info", page: "/info" },
    { name: "Freeboard", page: "/boards" },
    { name: "Market", page: "/market" },
    { name: "My Page", page: "/myPage" },
  ];

  return (
    <S.Wrapper>
      {NAVIGATION_MENU.map((el) => (
        <S.ButtonDiv key={el.page}>
          <S.NavigationButton id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </S.NavigationButton>
        </S.ButtonDiv>
      ))}
    </S.Wrapper>
  );
}
