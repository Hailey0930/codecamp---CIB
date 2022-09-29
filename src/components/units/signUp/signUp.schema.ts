import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  email: yup
    .string()
    .email("이메일 형식으로 입력해주세요.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,10}$/,
      "영문, 숫자, 특수문자 포함 10자리 이내로 입력해주세요."
    ),
});
