import styled from "styled-components";

interface INavUserModal {
  show: boolean;
}

export const NavUserModalbox = styled.div<INavUserModal>`
  width: 156px;
  height: 192px;
  border: 1px solid var(--main-border-color);
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  right: 20px;
  top: 50px;
  border-radius: 3px;
  background-color: var(--main-border-color);
`;
