import styled from "styled-components";
import HomeListItem from "./HomeListItem";

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
  { text: "Classical" },
  { text: "Rock" },
  { text: "Ballade" },
  { text: "Hip-hop" },
];

const HomeList: React.FC = () => {
  return (
    <HomeListWrap>
      <HomeListTitle>장르</HomeListTitle>
      <HomeListSubTitle>여기 여러 장르들이 나열되어있습니다.</HomeListSubTitle>
      <HomeListSubTitle>장르들을 확인해보세요!</HomeListSubTitle>
      <HomeListItemWrap>
        {genres.map((genre) => {
          return <HomeListItem text={genre.text} />;
        })}
      </HomeListItemWrap>
    </HomeListWrap>
  );
};

export default HomeList;
