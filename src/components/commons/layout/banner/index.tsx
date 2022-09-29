import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 1800px;
  height: 300px;

  background-color: #ffffff;
`;

const StyleSlider = styled(Slider)`
  width: 700px;
  height: 250px;

  .slick-slide {
    width: 800px;
    height: 250px;
  }

  .slick-slide img {
    width: 700px;
    height: 250px;
  }

  .slick-dots {
    .slick-active {
      button::before {
        font-size: 13px;
        color: #fed703;
      }
    }
    button::before {
      color: #c1c1c1;
    }
  }
`;

export default function LayoutBanner() {
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
    <Wrapper>
      <StyleSlider {...settings}>
        <img src="/image/banner/banner_dog.jpeg"></img>
        <img src="/image/banner/banner_character.jpeg"></img>
        <img src="/image/banner/banner_bears.jpeg"></img>
      </StyleSlider>
    </Wrapper>
  );
}
