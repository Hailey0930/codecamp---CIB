import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { accessTokenState, logInStatusState } from "../../../../commons/store";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();
  const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);
  const [accessToken] = useRecoilState(accessTokenState);

  const UserInfo = getUserInfo();

  useEffect(() => {
    if (accessToken) {
      setLogInStatus(true);
    } else if (!accessToken) {
      setLogInStatus(false);
    }
  }, [accessToken]);

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
