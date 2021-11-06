import NavigationForm from "src/Components/Nav/NavigationForm";
import styled from "styled-components";

const NavigationContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background-color: var(--main-dark-color);
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  z-index: 2;
`;

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationForm />
    </NavigationContainer>
  );
};

export default Navigation;
