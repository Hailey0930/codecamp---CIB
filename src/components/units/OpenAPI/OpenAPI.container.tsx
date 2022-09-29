import axios from "axios";
import { useEffect, useState } from "react";
import OpenAPIPresenter from "./OpenAPI.presenter";

export default function OpenAPIContainer() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      new Array(9).fill(1).map(async (el) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setImgUrls((prev) => [...prev, result.data.message]);
      });
    };
    getImg();
  }, []);

  return <OpenAPIPresenter imgUrls={imgUrls}></OpenAPIPresenter>;
}
