import MusicList from "./MainMusicList";
import styled from "styled-components";
import MainNavImg from "../../asset/img/MainNav.jpg";
import MainMusicItemsWrap from "./MainMusicItemsWrap";
import MainSearchForm from "./MainSearchForm";

const MainWrap = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
`;

const MainNav = styled.nav`
  margin-top: 60px;
  width: 100%;
  height: 152px;
  position: relative;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${MainNavImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainNavItemWrap = styled.div`
  width: 1200px;
  height: 100%;
  position: relative;
  background: none;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const MainNavTitle = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  vertical-align: middle;
  height: 30px;
  line-height: 30px;
`;

const MainNavSpanWrap = styled.ul`
  min-height: 38px;
  position: absolute;
  bottom: -5px;
  left: 0px;
  display: flex;
  column-gap: 20px;
  padding: 0px;
  margin: 0px;
`;

const MainNavSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  padding-bottom: 12px;
  border-bottom: 5px solid #b90000;
  color: white;
`;

const MainNavFooter = styled.div`
  width: 100%;
  height: 110px;
  border-bottom: 1px solid var(--main-border-color);
  position: relative;
`;

const MainMusicForm = () => {
  return (
    <MainWrap>
      <MainNav>
        <MainNavItemWrap>
          <MainNavTitle>Musics</MainNavTitle>
          <MusicList />
          <MainNavSpanWrap>
            <MainNavSpan>Music List</MainNavSpan>
          </MainNavSpanWrap>
        </MainNavItemWrap>
      </MainNav>
      <MainNavFooter>
        <MainSearchForm />
      </MainNavFooter>
      <MainMusicItemsWrap />
    </MainWrap>
  );
};

export default MainMusicForm;
