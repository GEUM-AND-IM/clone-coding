import styled from "styled-components";

interface IMusicDataProps {
  musicData: any[];
}

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
`;

const MainMusicItemImg = styled.img`
  width: 100%;
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
        <MainMusicItemImg src={image} />
      </MainMusicItemImgWrap>
      <MainMusicItemName>{name}</MainMusicItemName>
      <MainMusicItemArtistName>{artist}</MainMusicItemArtistName>
    </MainMusicItemBox>
  );
};

export default MainMusicItem;
