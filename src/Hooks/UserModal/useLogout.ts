const useLogout = () => {
  const logOut = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  return { logOut };
};

export default useLogout;
