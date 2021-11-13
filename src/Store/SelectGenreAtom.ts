import { atom } from "recoil";

interface currentModalState {
  isClassic: boolean;
  isRock: boolean;
  isBallade: boolean;
  isHiphop: boolean;
}

export const selectGenreAtom = atom<string>({
  key: "selectGenre",
  default: "Classical",
});

export const selectGenreCount = atom<number>({
  key: "selectGenreCount",
  default: 1118040088,
});

export const currentGenreModalState = atom<currentModalState>({
  key: "currentGenreModalState",
  default: {
    isClassic: true,
    isRock: false,
    isBallade: false,
    isHiphop: false,
  },
});
