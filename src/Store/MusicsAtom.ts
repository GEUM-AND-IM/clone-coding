import { atom } from "recoil";

export const musicsData = atom<any[]>({
  key: "musicsData",
  default: [],
});
