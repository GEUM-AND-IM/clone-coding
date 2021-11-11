import { atom } from "recoil";

export const profileData = atom<any[]>({
  key: "ProfileData",
  default: [],
});
