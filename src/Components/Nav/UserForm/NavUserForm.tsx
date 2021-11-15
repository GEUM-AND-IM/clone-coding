import { RefObject, useRef, useState } from "react";
import { NavigationUserContainer } from "./NavUserForm.style";
import NavUserModal from "../UserModal/NavUserModal";

const NavUserForm: React.FC = () => {
  const modalEl: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [click, setClick] = useState(false);

  const handleClickOutside = (e: MouseEvent): void => {
    if (modalEl.current && modalEl.current.contains(e.target as Node)) {
      setClick(false);
    }
  };

  return (
    <>
      <NavigationUserContainer onClick={() => setClick((prev) => !prev)}>
        <NavUserModal
          show={click}
          outSideRef={modalEl}
          onClickOutside={handleClickOutside}
        />
      </NavigationUserContainer>
    </>
  );
};

export default NavUserForm;
