import * as S from "../signUp/signUp.styles";
import { ISignUpPresenterProps } from "./signUp.types";

export default function SignUpPresenter(props: ISignUpPresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Wrapper>
        <S.Title>Sign up</S.Title>
        <S.WrapperBody>
          <S.Image src="/image/signUp.webp"></S.Image>
          <S.SignUp>
            <S.SignUpBody>
              <S.SignUpDiv>
                <S.SignUpTitle>이름</S.SignUpTitle>
                <S.SignUpInput {...props.register("name")}></S.SignUpInput>
              </S.SignUpDiv>
              <S.ErrorMessage>
                {props.formState.errors.name?.message}
              </S.ErrorMessage>
              <S.SignUpDiv>
                <S.SignUpTitle>이메일</S.SignUpTitle>
                <S.SignUpInput {...props.register("email")}></S.SignUpInput>
              </S.SignUpDiv>
              <S.ErrorMessage>
                {props.formState.errors.email?.message}
              </S.ErrorMessage>
              <S.SignUpDiv>
                <S.SignUpTitle>비밀번호</S.SignUpTitle>
                <S.SignUpInput
                  type="password"
                  {...props.register("password")}
                ></S.SignUpInput>
              </S.SignUpDiv>
              <S.ErrorMessage>
                {props.formState.errors.password?.message}
              </S.ErrorMessage>
            </S.SignUpBody>
          </S.SignUp>
          <S.SignUpButton type="submit">회원가입</S.SignUpButton>
        </S.WrapperBody>
      </S.Wrapper>
    </form>
  );
}
