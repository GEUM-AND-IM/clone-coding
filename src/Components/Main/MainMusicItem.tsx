import styled from "styled-components";
import PlayImg from "../../asset/img/Play.png";

interface IMusicDataProps2 {
  artist: string;
  image: string;
  listeners: string;
  name: string;
  url: string;
}

const MainMusicItemBox = styled.div`
  width: 170px;
  height: 266px;
  display: flex;
  flex-direction: column;
`;

const MainMusicItemImgWrap = styled.div`
  width: 100%;
  height: 170px;
  border: 1px solid var(--main-border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainMusicItemImg = styled.img`
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
`;
const MainMusicUrlBtnBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background-color: white;
  align-items: center;
  justify-content: center;
  display: none;
`;

const MainMusicUrlBtn = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  border: none;
  outline: none;
  left: 0px;
  top: 0px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    ${MainMusicUrlBtnBox} {
      display: flex;
    }
  }
`;

const MainMusicUrlBtnImg = styled.img`
  width: 50%;
`;

const MainMusicItemName = styled.h3`
  height: auto;
  margin: 0px;
  margin-top: 12px;
  font-weight: 900;
  line-height: 21px;
  font-size: 14px;
  max-height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MainMusicItemArtistName = styled.p`
  height: auto;
  font-size: 14px;
  font-weight: 300;
  margin: 0px;
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MainMusicItem = (Props: IMusicDataProps2): JSX.Element => {
  const { artist, image, listeners, name, url } = Props;

  return (
    <MainMusicItemBox>
      <MainMusicItemImgWrap>
        <MainMusicUrlBtn onClick={() => window.open(url)}>
          <MainMusicUrlBtnBox>
            <MainMusicUrlBtnImg src={PlayImg} />
          </MainMusicUrlBtnBox>
        </MainMusicUrlBtn>
        <MainMusicItemImg src={image} />
      </MainMusicItemImgWrap>
      <MainMusicItemName>{name}</MainMusicItemName>
      <MainMusicItemArtistName>{artist}</MainMusicItemArtistName>
    </MainMusicItemBox>
  );
};

export default MainMusicItem;
