import { NavUserModalbox } from "./NavUserModal.style";
import { RefObject } from "react";

const NavUserModal = ({
  show,
  onClickOutside,
  outSideRef,
}: {
  show: boolean;
  onClickOutside: (e: any) => void;
  outSideRef: RefObject<HTMLDivElement>;
}) => {
  return <NavUserModalbox show={show}>sadad</NavUserModalbox>;
};

export default NavUserModal;
