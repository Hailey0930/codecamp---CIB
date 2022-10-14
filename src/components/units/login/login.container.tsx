import { useMutation } from "@apollo/client";
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
import { LOGIN_USER } from "./login.queries";
import { schema } from "./login.schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setLogInStatus] = useRecoilState(logInStatusState);

  const router = useRouter();

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

  const onClickLogin = async (data: any) => {
    if (!data.email && !data.password) return;

    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setLogInStatus(true);

      if (!accessToken) {
        Modal.error({ title: "로그인을 해주세요!" });
        return;
      }

      setAccessToken(accessToken);
      message.success("로그인이 완료되었습니다!");
      router.push("/myPage");
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
