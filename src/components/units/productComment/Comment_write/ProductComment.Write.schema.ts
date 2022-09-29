import * as yup from "yup";

export const schema = yup.object({
  contents: yup.string().required("문의사항을 입력해주세요."),
});
