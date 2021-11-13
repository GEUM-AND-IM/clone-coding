import { useRecoilState } from "recoil";
import { musicsData } from "src/Store/MusicsAtom";
import styled from "styled-components";
import MainMusicItem from "./MainMusicItem";

const MainMusicListWrap = styled.div`
  width: 1200px;
  height: auto;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 30px;
`;

const MainMusicItemsWrap: React.FC = () => {
  const [musicData, setMusicData] = useRecoilState(musicsData);

  return (
    <MainMusicListWrap>
      {musicData.map((item, index) => {
        const { artist, image, listeners, name, url } = item;
        console.log(name, artist);
        const mediumImage = image[1];
        return (
          <MainMusicItem
            artist={artist}
            image={mediumImage["#text"]}
            listeners={listeners}
            name={name}
            url={url}
            key={index}
          />
        );
      })}
    </MainMusicListWrap>
  );
};

export default MainMusicItemsWrap;
