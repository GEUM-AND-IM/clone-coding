import styled from "styled-components";

interface HomeListItemProps {
  text: string;
  img: string;
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
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
`;

const HomeListItemImgWrap = styled.div`
  width: 96%;
  height: 96%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeListItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 200px;
  &:hover {
    filter: brightness(30%);
  }
`;

const HomeListItem = ({ text, img }: HomeListItemProps): JSX.Element => {
  return (
    <HomeListITemContainer>
      <HomeListItemText>{text}</HomeListItemText>
      <HomeListItemImgWrap>
        <HomeListItemImg src={img} />
      </HomeListItemImgWrap>
    </HomeListITemContainer>
  );
};

export default HomeListItem;
