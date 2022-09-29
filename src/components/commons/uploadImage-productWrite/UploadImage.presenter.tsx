import * as S from "../uploadImage-productWrite/UploadImage.styles";
import { GrUploadOption } from "react-icons/gr";
import { IUploadImagePresenterProps } from "./UploadImage.types";

export default function UploadImagePresenter(
  props: IUploadImagePresenterProps
) {
  console.log();
  return (
    <>
      {props.fileUrl ? (
        <S.PhotoUpload
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        ></S.PhotoUpload>
      ) : (
        <S.PhotoInput onClick={props.onClickUpload} type="button">
          <GrUploadOption></GrUploadOption>
        </S.PhotoInput>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      ></S.UploadFileHidden>
    </>
  );
}
