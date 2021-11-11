import { useEffect } from "react";
import { useLocation } from "react-router";
import { useRecoilState } from "recoil";
import { GETTOKEN } from "src/Lib/API/TokenApi";
import { profileData } from "src/Store/ProfileAtom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const useLogin = () => {
  const [userData, setUserData] = useRecoilState(profileData);

  const query = String(useQuery()).substring(5);
  console.log(query);

  const getToken = async () => {
    console.log("ASDadsa");
    const { data } = await GETTOKEN(query); // const { data } = await GETTOKEN(query);
    // setUserData(data.user);
    console.log(data);
    // window.localStorage.setItem("access_token", data.token);
    console.log(data);

    window.location.replace("/musics");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    getToken();
  }, []);

  return {
    onSubmit,
  };
};

export default useLogin;
