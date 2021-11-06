import { atom } from "recoil";

export const isUser = atom<boolean>({
  key: "isUser",
  default: false,
});

export const idState = atom<string>({
  key: "idState",
  default: "",
});

export const pwState = atom<string>({
  key: "pwState",
  default: "",
});
