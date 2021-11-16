import styled from "styled-components";

interface INavUserModal {
  show: boolean;
}

interface INavModalItem {
  textSize: number;
  bold: boolean;
  isClick: boolean;
}

export const NavUserModalbox = styled.div<INavUserModal>`
  width: 140px;
  height: auto;
  border: 1px solid var(--main-border-color);
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 15px;
  top: 80px;
  border-radius: 5px;
  background-color: var(--main-dark-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
  box-sizing: border-box;
  row-gap: 15px;
`;

export const NavUserModalItem = styled.div<INavModalItem>`
  width: 100%;
  height: auto;
  color: white;
  font-size: ${(props) => props.textSize}px;
  font-weight: ${(props) => (props.bold ? "bold" : "300")};
  cursor: ${(props) => (props.isClick ? "pointer" : "default")};
  &:hover {
    color: #ffa31a;
  }
`;

export const NavUserModalLine = styled.hr`
  width: 100%;
  border: 0px;
  border-bottom: 1px solid var(--main-border-color);
  margin: 0px;
`;
