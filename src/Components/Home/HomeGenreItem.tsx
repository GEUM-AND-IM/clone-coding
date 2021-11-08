import styled from "styled-components";

interface GenreItemProps {
  title: string;
  subTitle: string;
  explain: string;
}

const HomeGenreItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  color: white;
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

const HomeGenreItem = ({
  title,
  subTitle,
  explain,
}: GenreItemProps): JSX.Element => {
  return (
    <HomeGenreItemWrap>
      <HomeGenreItemTitle>{title}</HomeGenreItemTitle>
      <HomeGenreItemSubTitle>{subTitle}</HomeGenreItemSubTitle>
      <HomeGenreItemExplain>{explain}</HomeGenreItemExplain>
    </HomeGenreItemWrap>
  );
};

export default HomeGenreItem;
