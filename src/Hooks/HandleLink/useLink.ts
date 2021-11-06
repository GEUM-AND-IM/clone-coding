import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const useLink = (url: string) => {
  const navigate = useNavigate();
  const handleLink = useCallback(() => {
    navigate(url);
  }, [navigate, url]);

  return {
    handleLink,
  };
};

export default useLink;
