import { useEffect } from "react";
import { useLocation } from "react-router";
import Toast from "../../Lib/Toast/index";
import { useRecoilState } from "recoil";
import { GETUSER } from "src/Lib/API/GetUserApi";
import { GETTOKEN } from "src/Lib/API/TokenApi";
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
    Toast.successToast("성공적으로 로그인 되었습니다.");

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
