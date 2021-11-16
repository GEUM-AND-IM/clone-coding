import styled from "styled-components";

interface GenreItemProps {
  title: string;
  subTitle: string;
  explain: string;
  img: string;
}

const HomeGenreItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HomeGenreItemTitle = styled.p`
  font-size: 40px;
  color: white;
  margin: 0px;
  text-align: start;
  height: 50px;
`;

const HomeGenreItemSubTitle = styled.p`
  font-size: 20px;
  color: var(--main-color);
  font-weight: bold;
  opacity: 0.85;
  margin: 0px;
  text-align: start;
`;

const HomeGenreItemExplain = styled.p`
  width: 478px;
  height: 264px;
  font-size: 14px;
  color: white;
  word-break: keep-all;
  margin: 0px;
  margin-top: auto;
  margin-right: auto;
  overflow: hidden;
`;

const HomeGenreItemImgWrap = styled.div`
  width: 310px;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  border: 1px solid;
  border: 1px solid #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const HomeGenreItemImg = styled.img`
  width: 98%;
  height: 98%;
  object-fit: cover;
  border-radius: 3px;
`;

const HomeGenreItem = ({
  title,
  subTitle,
  explain,
  img,
}: GenreItemProps): JSX.Element => {
  return (
    <HomeGenreItemWrap>
      <HomeGenreItemTitle>{title}</HomeGenreItemTitle>
      <HomeGenreItemSubTitle>{subTitle}</HomeGenreItemSubTitle>
      <HomeGenreItemExplain>{explain}</HomeGenreItemExplain>
      <HomeGenreItemImgWrap>
        <HomeGenreItemImg src={img} />
      </HomeGenreItemImgWrap>
    </HomeGenreItemWrap>
  );
};

export default HomeGenreItem;
