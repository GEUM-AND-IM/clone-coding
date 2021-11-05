import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { idState, pwState } from "src/Store/LoginAtom";

const useLogin = () => {
  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
  const resetId = useResetRecoilState(idState);
  const resetPw = useResetRecoilState(pwState);

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setId(value);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setPw(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return {
    onChangeId,
    onChangePw,
    onSubmit,
  };
};

export default useLogin;
