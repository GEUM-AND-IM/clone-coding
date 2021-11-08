import { atom } from "recoil";

export const selectGenreAtom = atom<string>({
  key: "selectGenre",
  default: "Classical",
});

export const selectGenreCount = atom<number>({
  key: "selectGenreCount",
  default: 1118040088,
});
