import axios, { AxiosInstance } from "axios";
import { SERVER } from "../../config/config.json";
import Token from "../Token";

export const customAxios: AxiosInstance = axios.create({
  baseURL: SERVER,
  headers: {
    "access-token": `${Token.getToken()}`,
  },
});
