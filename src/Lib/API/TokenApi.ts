import axios from "axios";
import { customAxios } from "../Axios";
import { CLIENTID, CLIENTSECRET } from "../../config/config.json";
import { AuthClient } from "@b1nd/openapi";

const clientId: string = CLIENTID;
const clientSecret: string = CLIENTSECRET;

const authClient = new AuthClient({ clientId, clientSecret });

export const GETTOKEN = async (code: string) => {
  const token = await authClient.getToken(code);
  return token;
};
