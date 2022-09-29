import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .required("ID를 입력해주세요.")
    .email("이메일 형식으로 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});
