import { useRecoilState } from "recoil";
import useNavigation from "src/Hooks/Nav/useNavigation";
import { isUser } from "src/Store/LoginAtom";
import styled from "styled-components";
import { CLIENTID, REDIRECTURL } from "../../config/config.json";

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
  const { pushHome } = useNavigation();

  return (
    <NavigationWrap>
      <NavigationItemWrap>
        <NavigationItem>
          <NavigationItemText onClick={pushHome}>Home</NavigationItemText>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemText>Musics</NavigationItemText>
        </NavigationItem>
        {!login && (
          <a
            href={`http://dauth.b1nd.com/login?client_id=${CLIENTID}&redirect_uri=${REDIRECTURL}`}
            rel="noreferrer"
          >
            <NavigationLoginButton>LOG IN</NavigationLoginButton>{" "}
          </a>
        )}
      </NavigationItemWrap>
    </NavigationWrap>
  );
};

export default NavigationForm;
