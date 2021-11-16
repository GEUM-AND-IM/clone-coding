import useLogin from "src/Hooks/Login/useLogin";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
`;

const LoginLoader = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 8px solid var(--main-color);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  margin: auto auto;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const LoginPage: React.FC = () => {
  const { onSubmit } = useLogin();

  return (
    <>
      <LoginContainer>
        <LoginLoader />
      </LoginContainer>
    </>
  );
};

export default LoginPage;
