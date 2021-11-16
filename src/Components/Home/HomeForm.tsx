import styled from "styled-components";
import HomeCurrentGenre from "./HomeCurrentGenre";
import HomeGenreForm from "./HomeGenreForm";
import HomeHero from "./HomeHero";
import HomeList from "./HomeList";

const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HomeForm: React.FC = () => {
  return (
    <HomeWrap>
      <HomeHero />
      <HomeList />
      <HomeCurrentGenre />
      <HomeGenreForm />
    </HomeWrap>
  );
};

export default HomeForm;
