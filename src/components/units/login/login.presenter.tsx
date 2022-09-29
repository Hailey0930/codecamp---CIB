import * as S from "../login/login.styles";
import { ILoginPresenterProps } from "./login.types";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Title>Login</S.Title>
        <S.WrapperBody>
          <S.Image src="/image/login.jpeg"></S.Image>
          <S.LoginBody>
            <S.LoginDiv>
              <S.LoginTitle>ID</S.LoginTitle>
              <S.LoginInput {...props.register("email")}></S.LoginInput>
            </S.LoginDiv>
            <S.ErrorMessage>
              {props.formState.errors.email?.message}
            </S.ErrorMessage>
            <S.LoginDiv>
              <S.LoginTitle>PW</S.LoginTitle>
              <S.LoginInput
                type="password"
                {...props.register("password")}
              ></S.LoginInput>
            </S.LoginDiv>
            <S.ErrorMessage>
              {props.formState.errors.password?.message}
            </S.ErrorMessage>
            <S.LoginButton>로그인하기</S.LoginButton>
          </S.LoginBody>
          <S.LoginFooter>
            <S.FooterButton>아이디 찾기</S.FooterButton>
            <S.FooterButton>비밀번호 찾기</S.FooterButton>
            <S.FooterButton type="button" onClick={props.onClickMoveToSignUp}>
              회원가입
            </S.FooterButton>
          </S.LoginFooter>
        </S.WrapperBody>
      </S.Wrapper>
    </form>
  );
}
