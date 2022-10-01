import * as S from "./banner.styles";

export default function BannerPresenter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    draggable: true,
  };

  return (
    <S.Wrapper>
      <S.StyleSlider {...settings}>
        <img src="/image/banner/banner_dog.jpeg"></img>
        <img src="/image/banner/banner_character.jpeg"></img>
        <img src="/image/banner/banner_bears.jpeg"></img>
      </S.StyleSlider>
    </S.Wrapper>
  );
}
