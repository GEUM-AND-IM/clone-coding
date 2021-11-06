import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Pages from "../Pages/index";
import Navigation from "src/Pages/Nav/Navigation";
import { isUser } from "src/Store/LoginAtom";
import Footer from "./Footer/Footer";

const Router = () => {
  const [login, setLogin] = useRecoilState<boolean>(isUser);

  // useEffect(() => {}, []);
  setLogin(false);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/main"></Route>
        <Route path="/login" element={<Pages.Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
