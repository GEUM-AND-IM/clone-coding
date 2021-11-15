import { atom } from "recoil";

export const keywordData = atom<string>({
  key: "keywordData",
  default: "",
});

export const submitKeywordData = atom<string>({
  key: "submitKeywordData",
  default: "BTS",
});
