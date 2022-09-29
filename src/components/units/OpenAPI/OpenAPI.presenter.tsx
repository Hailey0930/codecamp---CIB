import * as S from "../OpenAPI/OpenAPI.styles";
import { IOpenAPIPresenterProps } from "./OpenAPI.types";

export default function OpenAPIPresenter(props: IOpenAPIPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>CIB Info</S.Title>
        <S.TitleContents>
          안녕하세요, CIB 홈페이지 입니다!<br></br>
          CIB는 Cute Is Best의 약자로, 귀여우면 무엇이든 좋아하는 사람들의
          커뮤니티 홈페이지입니다.<br></br> Freeboard에서는 자유롭게 게시물
          공유가 가능하며,<br></br>Market에서는 각종 귀여운 굿즈, 반려동물
          생활용품 등을 판매하실 수 있습니다!
        </S.TitleContents>
        <S.ImageWrapper>
          {props.imgUrls.map((el, index) => (
            <>
              <S.Contents key={el} src={el} />
              {(index + 1) % 3 === 0}
            </>
          ))}
        </S.ImageWrapper>
      </S.Wrapper>
    </>
  );
}
