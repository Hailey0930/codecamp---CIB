import * as S from "./UploadImage.styles";
import { IUploadImagePresenterProps } from "./UploadImage.types";

export default function UploadImagePresenter(
  props: IUploadImagePresenterProps
) {
  return (
    <>
      {props.fileUrl ? (
        <S.PhotoUpload
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        ></S.PhotoUpload>
      ) : (
        <S.PhotoButton onClick={props.onClickUpload}>
          <>+</>
        </S.PhotoButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      ></S.UploadFileHidden>
    </>
  );
}
