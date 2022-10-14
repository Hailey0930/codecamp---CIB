import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const PhotoUpload = styled.img`
  width: 45%;
  height: 200px;

  @media ${breakPoints.mobile} {
    height: 130px;
  }
`;

export const PhotoInput = styled.button`
  width: 45%;
  height: 200px;
  background-color: #bdbdbd;
  border: none;
  cursor: pointer;
  font-size: 1.875rem;

  @media ${breakPoints.mobile} {
    height: 130px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
