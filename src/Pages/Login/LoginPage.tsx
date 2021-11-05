import LoginForm from "src/Components/Login/LoginForm";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 980px;
  min-height: 554px;
  max-height: 554px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 96px 20px;
  box-sizing: border-box;
`;

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

export default LoginPage;
