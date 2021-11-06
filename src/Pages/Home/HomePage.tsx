import HomeForm from "src/Components/Home/HomeForm";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 700px;
  margin-top: 60px;
  background-color: var(--main-dark-color);
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <HomeForm />
    </HomeContainer>
  );
};

export default HomePage;
