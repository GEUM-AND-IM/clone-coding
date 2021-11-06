import useLogin from "src/Hooks/Login/useLogin";
import styled from "styled-components";

const LoginWrap = styled.form`
  display: flex;
  margin: auto;
  height: 357px;
  width: auto;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const LoginTitle = styled.h1`
  font-size: 30px;
  margin: 0px;
`;

const LoginInputTitle = styled.h1`
  font-size: 14px;
  margin: 0px;
`;

const LoginIdInput = styled.input`
  width: 284px;
  height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--main-border-color);
  border-radius: 3px;
  background-color: var(--main-background-color);
`;

const LoginPasswordInput = styled.input`
  width: 284px;
  height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--main-border-color);
  border-radius: 3px;
  background-color: var(--main-background-color);
`;

const LoginBottomWrap = styled.div`
  display: flex;
`;

const LoginSubmit = styled.button`
  width: 100px;
  height: 43px;
  padding: 20px;
  padding-top: 9px;
  padding-bottom: 10px;
  background-color: var(--main-color);
  color: white;
  border: 0px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
`;

const LoginNotice = styled.p`
  margin: 0px;
  font-size: 10px;
  font-weight: 300;
  margin-top: auto;
  margin-left: auto;
`;

const LoginForm: React.FC = () => {
  const { onChangeId, onChangePw, onSubmit } = useLogin();

  return (
    <LoginWrap onSubmit={onSubmit}>
      <LoginTitle>로그인</LoginTitle>
      <LoginInputTitle>아이디</LoginInputTitle>
      <LoginIdInput onChange={onChangeId} />
      <LoginInputTitle>비밀번호</LoginInputTitle>
      <LoginPasswordInput onChange={onChangePw} />
      <LoginBottomWrap>
        <LoginSubmit type="submit">로그인</LoginSubmit>
        <LoginNotice>※도담도담 계정으로 이용 가능합니다.</LoginNotice>
      </LoginBottomWrap>
    </LoginWrap>
  );
};

export default LoginForm;
