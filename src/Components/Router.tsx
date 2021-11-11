import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Pages from "../Pages/index";
import Navigation from "src/Pages/Nav/Navigation";
import { isUser } from "src/Store/LoginAtom";
import Footer from "src/Pages/Footer/Footer";

const Router = () => {
  const [login, setLogin] = useRecoilState<boolean>(isUser);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Pages.Home />}></Route>
        <Route path="/musics"></Route>
        <Route path="/main" element={<Pages.Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
