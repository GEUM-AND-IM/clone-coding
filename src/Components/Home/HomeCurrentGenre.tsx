import { useRecoilState } from "recoil";
import { selectGenreAtom, selectGenreCount } from "src/Store/SelectGenreAtom";
import styled from "styled-components";

const CurrentGenreWrap = styled.div`
  width: 1170px;
  margin: 0px auto;
  margin-top: 50px;
  height: 36px;
  border-top: 1px solid #2f2f2f;
  border-bottom: 1px solid #2f2f2f;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const CurrentGenreText = styled.p`
  font-size: 12px;
  color: white;
`;

const SelectGenreCount = styled.p`
  font-size: 12px;
  color: white;
  margin-left: auto;
`;

const HomeCurrentGenre: React.FC = () => {
  const [currentGenre, setCurrentGenre] = useRecoilState(selectGenreAtom);
  const [genreCount, setGenreCount] = useRecoilState(selectGenreCount);

  return (
    <CurrentGenreWrap>
      <CurrentGenreText>{currentGenre}</CurrentGenreText>
      <SelectGenreCount>{`Plays: ${genreCount}`}</SelectGenreCount>
    </CurrentGenreWrap>
  );
};

export default HomeCurrentGenre;
