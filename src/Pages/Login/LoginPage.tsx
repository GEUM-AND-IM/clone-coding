import AuthClient from "@b1nd/openapi";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useRecoilState } from "recoil";
import useLogin from "src/Hooks/Login/useLogin";
import { GETTOKEN } from "src/Lib/API/TokenApi";
import { profileData } from "src/Store/ProfileAtom";
import { CLIENTID, CLIENTSECRET } from "../../config/config.json";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// const clientId: string = CLIENTID;
// const clientSecret: string = CLIENTSECRET;

// const authClient = new AuthClient({ clientId, clientSecret });

interface ITokenType {
  token: string;
}

const LoginPage: React.FC = () => {
  const [userData, setUserData] = useRecoilState(profileData);
  const query = String(useQuery()).slice(5, 41);

  const getToken = async () => {
    const token = await GETTOKEN(query); // const { data } = await GETTOKEN(query);
    window.localStorage.setItem("access_token", token.access_token);
    window.location.replace("/musics");
  };

  useEffect(() => {
    getToken();
  }, []);

  // const { onSubmit } = useLogin();

  return (
    <>
      <div>Loading...</div>
    </>
  );
};

export default LoginPage;
