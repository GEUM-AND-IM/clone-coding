import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Pages from "../Pages/index";
import Navigation from "src/Pages/Nav/Navigation";
import { isUser } from "src/Store/LoginAtom";
import Footer from "src/Pages/Footer/Footer";
import { useEffect } from "react";
import Token from "src/Lib/Token";

const Router = () => {
  const [login, setLogin] = useRecoilState<boolean>(isUser);

  useEffect(() => {
    const isToken = Token.getToken();
    setLogin(!isToken ? false : true);
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/musics" element={<Pages.Main />} />
        <Route path="/main" element={<Pages.Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
