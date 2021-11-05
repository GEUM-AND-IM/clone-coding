import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Pages from "../Pages/index";
import Navigation from "src/Pages/Nav/Navigation";
import { isUser } from "src/Store/LoginAtom";

const Router = () => {
  const [login, setLogin] = useRecoilState<boolean>(isUser);

  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Navigation />
        <Route path="/" element={<Pages.Login />} />
        <Route path="/main"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
