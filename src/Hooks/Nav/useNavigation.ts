import useLink from "../HandleLink/useLink";

const useNavigation = () => {
  const { handleLink: pushLogin } = useLink("/login");
  const { handleLink: pushMain } = useLink("/main");
  const { handleLink: pushHome } = useLink("/");

  return { pushLogin, pushMain, pushHome };
};

export default useNavigation;
