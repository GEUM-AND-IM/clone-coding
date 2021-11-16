import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  currentGenreModalState,
  selectGenreAtom,
  selectGenreCount,
} from "src/Store/SelectGenreAtom";

const useSelectGenre = () => {
  const [currentGenre, setCurrentGenre] = useRecoilState(selectGenreAtom);
  const [genreCount, setGenreCount] = useRecoilState(selectGenreCount);
  const [genreModalState, setGenreModalState] = useRecoilState(
    currentGenreModalState
  );

  const selectGenre = (text: string) => {
    setCurrentGenre(text);
    setGenreCount((prev) => prev + 1);
    changeGenreModalState(text);
  };

  const changeGenreModalState = (genreType: string) => {
    switch (genreType) {
      case "Classical":
        setGenreModalState({
          isClassic: true,
          isRock: false,
          isBallade: false,
          isHiphop: false,
        });
        break;
      case "Rock":
        setGenreModalState({
          isClassic: false,
          isRock: true,
          isBallade: false,
          isHiphop: false,
        });
        break;
      case "Ballade":
        setGenreModalState({
          isClassic: false,
          isRock: false,
          isBallade: true,
          isHiphop: false,
        });
        break;
      case "Hip-hop":
        setGenreModalState({
          isClassic: false,
          isRock: false,
          isBallade: false,
          isHiphop: true,
        });
        break;
      default:
        break;
    }
  };

  return { selectGenre };
};

export default useSelectGenre;
