import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { ChangeUserInfoState, logInStatusState } from "../../../commons/store";
import { useAuth } from "../../commons/hooks/useAuth";
import MyPagePresenter from "./MyPage.presenter";
import {
  LOGOUT_USER,
  CREATE_POINT_TRANSACTION_OF_LOADING,
} from "./MyPage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPageContainer() {
  const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

  useAuth();

  const UserInfo = getUserInfo();

  const router = useRouter();

  const [logoutUser] = useMutation(LOGOUT_USER);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const deleteCookie = (name) => {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;";
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selected, setSelected] = useState("");

  const [isActive, setIsActive] = useState(false);

  const onClickLogout = () => {
    try {
      logoutUser();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
      setLogInStatus(false);

      deleteCookie("refreshToken");
      router.push("/login");
      message.success("로그아웃 되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    if (!event.target.value) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const onClickPoint = () => {
    const IMP = window.IMP;

    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "금액 충전",
        amount: selected,
        buyer_email: UserInfo?.fetchUserLoggedIn.email,
        buyer_name: UserInfo?.fetchUserLoggedIn.name,
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 구로구",
        buyer_postcode: "01181",
        m_redirect_url: `http://localhost:3000/`,
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          setModalIsOpen(false);
          router.push(`/myPage`);
          message.success("결제가 완료되었습니다.");
        } else {
          message.error("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <MyPagePresenter
        UserInfo={UserInfo}
        onClickLogout={onClickLogout}
        onChangeSelect={onChangeSelect}
        onClickPoint={onClickPoint}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        isActive={isActive}
        selected={selected}
      ></MyPagePresenter>
    </>
  );
}
