import { MouseEventHandler } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginPresenterProps {
  onClickMoveToSignUp: MouseEventHandler<HTMLButtonElement>;
  onClickLogin: (data) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}
