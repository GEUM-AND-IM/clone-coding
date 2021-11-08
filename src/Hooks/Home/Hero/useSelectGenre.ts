import { useRecoilState } from "recoil";
import { selectGenreAtom, selectGenreCount } from "src/Store/SelectGenreAtom";

const useSelectGenre = () => {
  const [currentGenre, setCurrentGenre] = useRecoilState(selectGenreAtom);
  const [genreCount, setGenreCount] = useRecoilState(selectGenreCount);

  const selectGenre = (text: string) => {
    setCurrentGenre(text);
    setGenreCount((prev) => prev + 1);
  };

  return { selectGenre };
};

export default useSelectGenre;
