import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("상품 한줄 요약을 입력해주세요."),
  contents: yup.string().required("상품 설명을 입력해주세요."),
  price: yup
    .number()
    .required("상품 가격을 입력해주세요.")
    .positive("올바른 금액을 입력해주세요.")
    .typeError("숫자만 입력 가능합니다."),
});
