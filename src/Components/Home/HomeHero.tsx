import HomeHeroImg from "../../asset/img/HomeHero.jpg";
import styled from "styled-components";

const HomeHeroWrap = styled.div`
  width: 100%;
  height: 212px;
  position: relative;
  background-attachment: fixed;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${HomeHeroImg});
  overflow: hidden;
`;

const HomeHeroTitleWrap = styled.div`
  width: 1170px;
  height: 114px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomeHeroTitle = styled.p`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin: 0px;
  font-size: 24px;
  margin-bottom: 18px;
`;

const HomeHeroSubTitle = styled.p`
  margin: 0px;
  color: white;
`;

const HomeHero: React.FC = () => {
  return (
    <HomeHeroWrap>
      <HomeHeroTitleWrap>
        <HomeHeroTitle>여러 음악을 찾아보세요!</HomeHeroTitle>
        <HomeHeroSubTitle>
          루비는 좋아하는 음악으로 서비스를 모으고, 듣고, 보고, 공유함으로써
          당신의 음악 세계를 연결합니다.
        </HomeHeroSubTitle>
        <HomeHeroSubTitle>
          여러 음악을 찾고 공유할 수 있습니다.
        </HomeHeroSubTitle>
      </HomeHeroTitleWrap>
    </HomeHeroWrap>
  );
};

export default HomeHero;
