import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const logInStatusState = atom({
  key: "logInStatus",
  default: false,
});

export const ChangeUserInfoState = atom({
  key: "ChangeUserInfoState",
  default: false,
});
