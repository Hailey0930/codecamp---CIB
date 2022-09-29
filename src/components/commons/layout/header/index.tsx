import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { accessTokenState, logInStatusState } from "../../../../commons/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1800px;
  height: 80px;
  background-color: #ffffff;
`;

const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 100px;
  width: 180px;
  height: 80px;
  cursor: pointer;
`;

const LogoImage = styled.div`
  width: 60px;
  height: 60px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const PageName = styled.a`
  width: 60px;
  height: 70px;
  font-family: "SBAggroB";
  font-size: 50px;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;

  :hover {
    color: #000;
    text-shadow: 1px 1px 1px #ffd600;
  }
`;

const WrapperUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 250px;
  height: 80px;
  margin-right: 100px;
`;

const Login = styled.button`
  height: 60px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 25px;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #ffd600;
    color: #000;
  }
`;

const SignUp = styled.button`
  height: 60px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 25px;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
  cursor: pointer;

  :hover {
    text-shadow: 1px 1px 1px #ffd600;
    color: #000;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
`;

const InfoProfile = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 60px;
  height: 60px;
  margin-right: 5px;
`;

const InfoName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 60px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 23px;
  color: #000;
  text-shadow: 1px 1px 1px #ffd600;
  margin-right: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 60px;
  font-family: "SBAggroB";
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

  const UserInfo = getUserInfo();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLogInStatus(true);
    } else if (!localStorage.getItem("accessToken")) {
      setLogInStatus(false);
    }
  }, [logInStatus]);

  const onClickLogo = () => {
    router.push("/boards");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signUp");
  };

  const onClickProfile = () => {
    router.push("/myPage");
  };

  return (
    <Wrapper>
      <WrapperLogo onClick={onClickLogo}>
        <LogoImage>
          <Image src="/image/header/Logo.jpeg"></Image>
        </LogoImage>
        <PageName>CIB</PageName>
      </WrapperLogo>

      <WrapperUserDiv>
        {!logInStatus ? (
          <>
            <Login onClick={onClickLogin}>로그인</Login>
            <SignUp onClick={onClickSignUp}>회원가입</SignUp>
          </>
        ) : (
          <InfoWrapper onClick={onClickProfile}>
            {UserInfo?.fetchUserLoggedIn.picture ? (
              <InfoProfile
                src={`http://storage.googleapis.com/${getUserInfo().picture}`}
              ></InfoProfile>
            ) : (
              <InfoProfile src="/image/profile.webp"></InfoProfile>
            )}
            <InfoName>{UserInfo?.fetchUserLoggedIn.name}</InfoName>
            <Info> 님 안녕하세요!</Info>
          </InfoWrapper>
        )}
      </WrapperUserDiv>
    </Wrapper>
  );
}
