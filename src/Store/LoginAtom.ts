import { atom } from "recoil";

export const isUser = atom<boolean>({
  key: "isUser",
  default: false,
});
