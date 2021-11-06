import useLink from "../HandleLink/useLink";

const useNavigation = () => {
  const { handleLink: pushLogin } = useLink("/login");
  const { handleLink: pushMain } = useLink("/main");

  return { pushLogin, pushMain };
};

export default useNavigation;
