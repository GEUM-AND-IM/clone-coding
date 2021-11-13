import MainFrom from "src/Components/Main/MainMusicForm";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: auto;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <MainFrom />
    </MainContainer>
  );
};

export default MainPage;
