import { ReturnAuth } from "./returnAuthClient";

export const GETTOKEN = async (code: string) => {
  const authClient = ReturnAuth();
  const token = await authClient.getToken(code);
  return token;
};
