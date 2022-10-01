import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "IM_Hyemin-Bold";
    font-size: 16px;
  }

  @font-face {
    font-family: "Jua";
    src: url("/fonts/Jua-Regular.ttf");
  }

  @font-face {
    font-family: "Dongle-Bold";
    src: url("/fonts/Dongle-Bold.ttf");
  }

  @font-face {
    font-family: "Dongle-Light";
    src: url("/fonts/Dongle-Light.ttf");
  }

  @font-face {
    font-family: "Dongle-Regular";
    src: url("/fonts/Dongle-Regular.ttf");
  }

  @font-face {
    font-family: "HiMelody-Regular";
    src: url("/fonts/HiMelody-Regular.ttf");
  }

  @font-face {
    font-family: "IM_Hyemin-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SBAggroB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SDSamliphopangche_Outline";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
