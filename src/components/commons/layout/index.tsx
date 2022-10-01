import LayoutFooter from "./footer";
import { ReactNode } from "react";
import LayoutSidebar from "./sidebar";
import { useRouter } from "next/router";
import HeaderContainer from "./header/header.container";
import BannerContainer from "./banner/banner.container";
import NavigationContainer from "./navigation/navigation.container";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface ILayoutProps {
  children: ReactNode;
}

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100vw;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const ChildrenWrapper = styled.div`
  width: 75%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const LOOK_SIDEBAR = ["/myPage", "/myPage/buyList"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isLookSidebar = LOOK_SIDEBAR.includes(router.asPath);

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <BannerContainer></BannerContainer>
      <NavigationContainer></NavigationContainer>
      <BodyWrapper>
        {isLookSidebar ? (
          <>
            <LayoutSidebar></LayoutSidebar>
            <ChildrenWrapper>{props.children}</ChildrenWrapper>
          </>
        ) : (
          <div>{props.children}</div>
        )}
      </BodyWrapper>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
