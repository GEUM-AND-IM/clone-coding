import {
  NavUserModalbox,
  NavUserModalItem,
  NavUserModalLine,
} from "./NavUserModal.style";
import { RefObject, useEffect } from "react";
import useLogout from "src/Hooks/UserModal/useLogout";

const NavUserModal = ({
  show,
  onClickOutside,
  outSideRef,
}: {
  show: boolean;
  onClickOutside: (e: any) => void;
  outSideRef: RefObject<HTMLDivElement>;
}) => {
  //   useEffect(() => {
  //     document.addEventListener("mousedown", onClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", onClickOutside);
  //     };
  //   }, [onClickOutside]);

  const { logOut } = useLogout();

  return (
    <NavUserModalbox show={show} ref={outSideRef}>
      <NavUserModalItem textSize={18} bold={true} isClick={false}>
        임동현
      </NavUserModalItem>
      <NavUserModalLine />
      <NavUserModalItem
        textSize={15}
        bold={false}
        isClick={true}
        onClick={logOut}
      >
        로그아웃
      </NavUserModalItem>
    </NavUserModalbox>
  );
};

export default NavUserModal;
