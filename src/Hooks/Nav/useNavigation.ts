import useLink from "../HandleLink/useLink";

const useNavigation = () => {
  const { handleLink: pushMusics } = useLink("/musics");
  const { handleLink: pushHome } = useLink("/");

  return { pushMusics, pushHome };
};

export default useNavigation;
