import { IQuery } from "../../../../commons/types/generated/types";

export interface IHeaderPresenterProps {
  UserInfo: Pick<IQuery, "fetchUserLoggedIn">;
  onClickLogo: () => void;
  onClickLogin: () => void;
  onClickSignUp: () => void;
  onClickProfile: () => void;
  logInStatus: boolean;
}
