import styled from "styled-components";

interface HomeListItemProps {
  text: string;
  img?: string;
}

const HomeListITemContainer = styled.div`
  width: 245px;
  height: 245px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  border: 1px solid #666;
  margin: 0px auto;
  position: relative;
`;

const HomeListItemText = styled.p`
  margin: 0px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomeListItem = ({ text, img }: HomeListItemProps): JSX.Element => {
  return (
    <HomeListITemContainer>
      <HomeListItemText>{text}</HomeListItemText>
    </HomeListITemContainer>
  );
};

export default HomeListItem;
