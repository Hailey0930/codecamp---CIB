import { useApolloClient, useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState, logInStatusState } from "../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import LoginPresenter from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import { schema } from "./login.schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

  const router = useRouter();
  const client = useApolloClient();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickMoveToSignUp = () => {
    router.push("/signUp");
  };

  const onClickLogin = async (data) => {
    // 1. 로그인 해서 토큰 받아오기
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken || "");
      localStorage.setItem("accessToken", accessToken);

      // 2. 로그인 토큰으로 유저 정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      message.success(`${userInfo.name}님, 안녕하세요!`);
      router.push("/myPage");
      setLogInStatus(true);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      router.push("/signUp");
    }
  };

  return (
    <LoginPresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickLogin={onClickLogin}
    ></LoginPresenter>
  );
}
