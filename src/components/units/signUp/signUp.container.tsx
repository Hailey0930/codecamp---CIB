import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import SignUpPresenter from "./signUp.presenter";
import { CREATE_USER } from "./signUp.queries";
import { schema } from "./signUp.schema";

export default function SignUpContainer() {
  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      message.success("회원가입이 완료되었습니다.");
      router.push("/login");
      console.log(result.data?.createUser.picture);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <SignUpPresenter
      onClickSignUp={onClickSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    ></SignUpPresenter>
  );
}
