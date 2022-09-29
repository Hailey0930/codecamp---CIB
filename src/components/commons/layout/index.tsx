import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";
import LayoutSidebar from "./sidebar";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const LOOK_SIDEBAR = ["/myPage", "/myPage/buyList"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isLookSidebar = LOOK_SIDEBAR.includes(router.asPath);

  return (
    <>
      <LayoutHeader></LayoutHeader>
      <LayoutBanner></LayoutBanner>
      <LayoutNavigation></LayoutNavigation>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {isLookSidebar && <LayoutSidebar></LayoutSidebar>}

        <div>{props.children}</div>
      </div>
      <LayoutFooter></LayoutFooter>
    </>
  );
}
