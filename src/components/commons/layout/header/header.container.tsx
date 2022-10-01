import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { logInStatusState } from "../../../../commons/store";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();
  const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

  const UserInfo = getUserInfo();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLogInStatus(true);
    } else if (!localStorage.getItem("accessToken")) {
      setLogInStatus(false);
    }
  }, [logInStatus]);

  const onClickLogo = () => {
    router.push("/boards");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signUp");
  };

  const onClickProfile = () => {
    router.push("/myPage");
  };

  return (
    <HeaderPresenter
      UserInfo={UserInfo}
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickSignUp={onClickSignUp}
      onClickProfile={onClickProfile}
      logInStatus={logInStatus}
    ></HeaderPresenter>
  );
}
