import { atom } from "recoil";

export const selectGenreAtom = atom<string>({
  key: "selectGenre",
  default: "",
});
