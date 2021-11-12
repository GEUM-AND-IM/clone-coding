import { ReturnAuth } from "./returnAuthClient";

export const GETUSER = async (token: string) => {
  const authClient = ReturnAuth();
  const user = await authClient.getUser(token);
  return user;
};
