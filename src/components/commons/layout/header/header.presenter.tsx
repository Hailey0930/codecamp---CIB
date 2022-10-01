import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import * as S from "./header.styles";
import { IHeaderPresenterProps } from "./header.types";

export default function HeaderPresenter(props: IHeaderPresenterProps) {
  return (
    <S.Wrapper>
      <S.WrapperLogo onClick={props.onClickLogo}>
        <S.Image src="/image/header/Logo.jpeg"></S.Image>
        <S.PageName>CIB</S.PageName>
      </S.WrapperLogo>

      <S.WrapperUserDiv>
        {!props.logInStatus ? (
          <>
            <S.Login onClick={props.onClickLogin}>로그인</S.Login>
            <S.SignUp onClick={props.onClickSignUp}>회원가입</S.SignUp>
          </>
        ) : (
          <S.InfoWrapper onClick={props.onClickProfile}>
            <S.InfoName>{props.UserInfo?.fetchUserLoggedIn.name}</S.InfoName>
            <S.Info> 님 안녕하세요!</S.Info>
          </S.InfoWrapper>
        )}
      </S.WrapperUserDiv>
    </S.Wrapper>
  );
}
