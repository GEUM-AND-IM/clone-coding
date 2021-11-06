import styled from "styled-components";
import Language from "./Language";

// const FooterBar = styled.div`
//   width: 100%;
//   height: 400px;
//   background-color: #111;
//   position: absolute;
//   bottom: 0px;
//   color: #fff;
// `;

const FooterBottom = styled.div`
  width: 1170px;
  height: 90%;
  background-color: var(--main-subDark-color);
  padding: 60px 0px;
  box-sizing: border-box;
  color: #666666;
  display: flex;
  flex-direction: column;
`;

const Listyle = styled.li`
  list-style: none;
  margin: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

const Ulstyle = styled.ul`
  height: 50px;
  display: flex;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
`;

const UIstyleWrap = styled.div`
  display: flex;
`;

const Ulstyle2 = styled.ul`
  margin: 0px;
  margin-top: auto;
  font-size: 12px;
  padding: 0px;
`;

const Span = styled.span`
  display: flex;
  align-items: top;
  margin: 8px 0px;
  margin-left: auto;
`;

const FooterForm = () => {
  const Languages = [
    "English",
    "Deutsch",
    "Español",
    "Français",
    "Italiano",
    "日本語",
    "Polski",
    "Português",
    "Русский",
    "Svenska",
    "Türkçe",
  ];

  return (
    <FooterBottom>
      <UIstyleWrap>
        <Ulstyle>
          {Languages.map((lang) => {
            return <Language language={lang} />;
          })}
        </Ulstyle>
        <Span>Show your Music</Span>
      </UIstyleWrap>
      <Ulstyle2>
        <Listyle>
          CBS Interactive © 2021 Last.fm Ltd. All rights reserved Terms of Use
          Privacy Policy Legal Policies Cookies Policy Do Not Sell My Personal
          Information
        </Listyle>
        <Listyle> Jobs at ViacomCBS Last.fm Music</Listyle>
        <Listyle>
          Happiness can be found even in the darkest of times,if one only
          remembers to turn on the light
        </Listyle>
      </Ulstyle2>
    </FooterBottom>
  );
};

export default FooterForm;
