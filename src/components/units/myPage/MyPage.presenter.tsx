import * as S from "../myPage/MyPage.styles";
import { IMyPagePresenterProps } from "./MyPage.types";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";

export default function MyPagePresenter(props: IMyPagePresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>My Page</S.Title>
        <S.WrapperBody>
          {props.UserInfo?.fetchUserLoggedIn.picture ? (
            <S.Image
              src={`http://storage.googleapis.com/${props.UserInfo?.fetchUserLoggedIn.picture}`}
            ></S.Image>
          ) : (
            <S.Image src="/image/profile.webp"></S.Image>
          )}
          <S.ProfileBody>
            <S.ProfileDiv>
              <S.ProfileTitle>이름</S.ProfileTitle>
              <S.ProfileContents>
                {props.UserInfo?.fetchUserLoggedIn.name}
              </S.ProfileContents>
            </S.ProfileDiv>
            <S.ProfileDiv>
              <S.ProfileTitle>ID</S.ProfileTitle>
              <S.ProfileContents>
                {props.UserInfo?.fetchUserLoggedIn.email}
              </S.ProfileContents>
            </S.ProfileDiv>
            <S.ProfileDiv>
              <S.ProfileTitle>포인트</S.ProfileTitle>
              <S.ProfileContents>
                {props.UserInfo?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}
                P
              </S.ProfileContents>
            </S.ProfileDiv>
            <S.UpdateButton onClick={props.onClickLogout}>
              <ImExit
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></ImExit>
              로그아웃
            </S.UpdateButton>
            <S.UpdateButton>
              <FiSettings
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></FiSettings>
              프로필 설정
            </S.UpdateButton>
            <S.UpdateButton onClick={() => props.setModalIsOpen(true)}>
              <BsCreditCard2Back
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "15px",
                }}
              ></BsCreditCard2Back>
              포인트 충전
            </S.UpdateButton>
            <S.ModalStyle isOpen={props.modalIsOpen}>
              <S.ModalCloseButton onClick={() => props.setModalIsOpen(false)}>
                <AiOutlineClose style={{ width: "16px", height: "16px" }} />
              </S.ModalCloseButton>
              <S.ModalTitle>충전하실 금액을 선택해주세요</S.ModalTitle>
              <S.ModalSelect
                value={props.selected}
                onChange={props.onChangeSelect}
              >
                <option value="">포인트 선택</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="2000">2,000</option>
                <option value="5000">5,000</option>
              </S.ModalSelect>
              <S.ModalButton
                isActive={props.isActive}
                onClick={props.onClickPoint}
              >
                충전하기
              </S.ModalButton>
            </S.ModalStyle>
          </S.ProfileBody>
        </S.WrapperBody>
      </S.Wrapper>
    </>
  );
}
