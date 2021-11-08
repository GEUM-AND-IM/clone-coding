import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import useNavigation from "src/Hooks/Nav/useNavigation";
import { isUser } from "src/Store/LoginAtom";
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
  column-gap: 20px;
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
  font-size: 14px;
  &:hover {
    color: #fff;
    opacity: 100%;
  }
`;

const NavigationLoginButton = styled.button`
  width: 85px;
  height: 40px;
  padding: 0px 18px;
  font-size: 12px;
  font-weight: bold;
  color: var(--main-dark-color);
  border-radius: 3px;
  border: 0px;
  background-color: #e3e3e3;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const NavigationForm: React.FC = () => {
  const [login, setLogin] = useRecoilState<boolean>(isUser);
  const { pushLogin, pushMain, pushHome } = useNavigation();

  return (
    <NavigationWrap>
      <NavigationItemWrap>
        <NavigationItem>
          <NavigationItemText onClick={pushHome}>Home</NavigationItemText>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemText onClick={pushMain}>Musics</NavigationItemText>
        </NavigationItem>
        {!login && (
          <NavigationLoginButton onClick={pushLogin}>
            LOG IN
          </NavigationLoginButton>
        )}
      </NavigationItemWrap>
    </NavigationWrap>
  );
};

export default NavigationForm;
