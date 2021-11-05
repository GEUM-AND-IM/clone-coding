import LoginForm from "src/Components/Login/LoginForm";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
`;

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

export default LoginPage;
