import styled from "styled-components";
import HomeListItem from "./HomeListItem";
import HiphopGenreImg from "../../asset/img/HiphopGenre.jfif";
import RockGenreImg from "../../asset/img/RockGenre.jpeg";
import ClassicGenreImg from "../../asset/img/ClassicGenre.jfif";
import BalladeGenreImg from "../../asset/img/BalladeGenre.jfif";

const HomeListWrap = styled.div`
  width: 1170px;
  height: auto;
  margin: 0px auto;
  margin-top: 50px;
  row-gap: 6px;
`;

const HomeListTitle = styled.p`
  width: 100%;
  margin: 0px;
  color: white;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  opacity: 0.85;
`;

const HomeListSubTitle = styled.p`
  font-size: 14px;
  margin: 0px;
  color: white;
  font-weight: 300;
  text-align: center;
  opacity: 0.85;
`;

const HomeListItemWrap = styled.div`
  display: flex;
`;

const genres = [
  { text: "Classical", img: ClassicGenreImg },
  { text: "Rock", img: RockGenreImg },
  { text: "Ballade", img: BalladeGenreImg },
  { text: "Hip-hop", img: HiphopGenreImg },
];

const HomeList: React.FC = () => {
  return (
    <HomeListWrap>
      <HomeListTitle>장르</HomeListTitle>
      <HomeListSubTitle>여기 여러 장르들이 나열되어 있습니다.</HomeListSubTitle>
      <HomeListSubTitle>장르들을 확인해보세요!</HomeListSubTitle>
      <HomeListItemWrap>
        {genres.map((genre) => {
          return <HomeListItem text={genre.text} img={genre.img} />;
        })}
      </HomeListItemWrap>
    </HomeListWrap>
  );
};

export default HomeList;
