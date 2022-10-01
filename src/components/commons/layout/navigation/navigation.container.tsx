import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NavigationPresenter from "./navigation.presenter";

export default function NavigationContainer() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) router.push(event.target.id);
  };

  return <NavigationPresenter onClickMenu={onClickMenu}></NavigationPresenter>;
}
