import useLogin from "src/Hooks/Login/useLogin";

const LoginPage: React.FC = () => {
  const { onSubmit } = useLogin();

  return (
    <>
      <div>Loading...</div>
    </>
  );
};

export default LoginPage;
