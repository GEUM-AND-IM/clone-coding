import { useEffect } from "react";
import { useLocation } from "react-router";
import { useRecoilState } from "recoil";
import { GETUSER } from "src/Lib/API/GetUserApi";
import { GETTOKEN } from "src/Lib/API/TokenApi";
import Token from "src/Lib/Token";
import { isUser } from "src/Store/LoginAtom";
import { profileData } from "src/Store/ProfileAtom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const useLogin = () => {
  const [login, setLogin] = useRecoilState<boolean>(isUser);
  const [userData, setUserData] = useRecoilState(profileData);

  const query = String(useQuery()).slice(5, 41);

  const getToken = async () => {
    const token = await GETTOKEN(query);
    window.localStorage.setItem("access_token", token.access_token);
    // const user = await GETUSER(token.access_token);
    // console.log(user);
    window.location.replace("/musics");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    getToken();
  }, []);

  return {
    onSubmit,
  };
};

export default useLogin;
