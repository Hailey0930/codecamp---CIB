import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 1300px;
  margin: 100px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  width: 1000px;
  font-size: 50px;
  font-weight: 400px;
  margin-left: 130px;
  margin-bottom: 10px;
  font-family: "SBAggroB";
  color: #ffd600;
  text-shadow: 1px 1px 1px #000;
`;

export const TitleContents = styled.div`
  font-size: 20px;
  font-weight: 250px;
  width: 1000px;
  margin-left: 130px;
  margin-bottom: 20px;
  border: 3px dashed #ffd600;
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  margin-left: 150px;
`;

export const Contents = styled.img`
  width: 300px;
  height: 300px;
  margin: 10px;
`;
