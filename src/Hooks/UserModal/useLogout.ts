import Toast from "src/Lib/Toast";

const useLogout = () => {
  const logOut = () => {
    localStorage.removeItem("access_token");
    Toast.successToast("성공적으로 로그아웃 되었습니다.");
    window.location.reload();
  };

  return { logOut };
};

export default useLogout;
