import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 996px;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 250px;
`;

export const ProfileImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
`;

export const ProfileDetail = styled.div`
  padding: 10px;
`;

export const ProfileDetailName = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

export const ProfileDetailCreateAt = styled.div`
  font-size: 15px;
  font-weight: 400px;
  line-height: 24px;
  color: #828282;
  padding: 5px;
`;

export const BoardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100px;
`;

export const BoardInfoUrl = styled.button`
  width: 27px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const BoardInfoGps = styled.button`
  width: 27px;
  height: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 996px;
  padding: 10px;
  margin: 30px 0px;
`;

export const BoardDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 100px;
`;

export const BoardDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 900px;
  font-size: 40px;
  font-weight: 700;
  line-height: 53px;
  margin-bottom: 15px;
  padding: 5px;
`;

export const BoardDetailImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 900px;
  margin-bottom: 15px;
`;

export const DetailImage = styled.img`
  width: 900px;
  height: 480px;
  margin-bottom: 15px;
`;

export const BoardDetailContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 900px;
  font-size: 25px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 10px;
  padding: 10px;
`;

export const BoardYoutubeUrl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 486px;
  margin-bottom: 100px;
`;

export const BoardReaction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 150px;
  padding: 10px;
`;

export const BoardReactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardReactionLikeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #ffd600;

  :hover {
    color: blue;
  }
`;

export const BoardReactionLikeText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 50px;
  height: 27px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
`;

export const BoardReactionDislikeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #828282;

  :hover {
    color: blue;
  }
`;

export const BoardReactionDislikeText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 50px;
  height: 27px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: #828282;
`;

export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1200px;
  margin: 0px 100px;
`;

export const WrapperBottomButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 1300px;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
  margin-left: 100px;
`;

export const BoardButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 179px;
  height: 45px;
  padding: 14px 60px;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  :hover {
    background-color: #fed703;
    border-color: #ffffff;
  }
`;
