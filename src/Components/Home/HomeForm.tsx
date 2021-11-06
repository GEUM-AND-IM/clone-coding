import styled from "styled-components";
import HomeHero from "./HomeHero";

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
    </HomeWrap>
  );
};

export default HomeForm;
