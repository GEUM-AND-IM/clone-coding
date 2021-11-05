import styled from "styled-components";

const NavigationWrap = styled.nav`
  width: 100%;
  display: flex;
  height: 100%;
`;

const NavigationItemWrap = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  margin-left: auto;
  column-gap: 10px;
`;

const NavigationItem = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavigationItemText = styled.p`
  margin: 0px;
  color: #fff;
  opacity: 0.85;
  &:hover {
    color: #fff;
    opacity: 100%;
  }
`;

const NavigationForm: React.FC = () => {
  return (
    <NavigationWrap>
      <NavigationItemWrap>
        <NavigationItem>
          <NavigationItemText>Home</NavigationItemText>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemText>Musics</NavigationItemText>
        </NavigationItem>
      </NavigationItemWrap>
    </NavigationWrap>
  );
};

export default NavigationForm;
