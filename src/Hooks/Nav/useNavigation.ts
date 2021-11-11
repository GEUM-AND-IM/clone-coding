import useLink from "../HandleLink/useLink";

const useNavigation = () => {
  const { handleLink: pushMain } = useLink("/main");
  const { handleLink: pushHome } = useLink("/");

  return { pushMain, pushHome };
};

export default useNavigation;
