import axios from "axios";
import { customAxios } from "../Axios";
import { CLIENTID, CLIENTSECRET } from "../../config/config.json";
import { AuthClient } from "@b1nd/openapi";

export const GETTOKEN = async (code: string) => {
  const token = await AuthClient.getToken(code);
  return token;
};
