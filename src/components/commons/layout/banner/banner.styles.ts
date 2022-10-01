import styled from "@emotion/styled";
import Slider from "react-slick";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100vw;
  height: 300px;

  background-color: #ffffff;

  @media ${breakPoints.tablet} {
    height: 250px;
  }

  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

export const StyleSlider = styled(Slider)`
  width: 60%;
  height: 250px;

  @media ${breakPoints.tablet} {
    height: 200px;
  }

  @media ${breakPoints.mobile} {
    height: 150px;
  }

  .slick-slide {
    width: 100%;
    height: 250px;

    @media ${breakPoints.tablet} {
      height: 200px;
    }

    @media ${breakPoints.mobile} {
      height: 150px;
    }
  }

  .slick-slide img {
    width: 100%;
    height: 250px;

    @media ${breakPoints.tablet} {
      height: 200px;
    }

    @media ${breakPoints.mobile} {
      height: 150px;
    }
  }

  .slick-dots {
    .slick-active {
      button::before {
        font-size: 0.8125rem;
        color: #fed703;
      }
    }
    button::before {
      color: #c1c1c1;
    }
  }
`;
