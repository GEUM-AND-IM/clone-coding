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
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #111;
  color: #666;
`;

const Container = styled.div`
  display: flex;
  align-items: top;
  position: absolute;
  left: 300px;
`;

const Listyle = styled.li`
  list-style: none;
  margin: 8px;
  &:hover{
    text-decoration: underline;
  }
`;


const Ulstyle = styled.ul`
  height: 50px;
  display: flex;
  font-size: 14px;
`;

const Ulstyle2 = styled.ul`
position: absolute;
  left: 300px;
  margin-top: 70px;
  font-size: 12px;
`


const Footer = () => {
    const Languages = ["English", "Deutsch", "Español", "Français", "Italiano", "日本語", "Polski" , "Português", "Русский", "Svenska", "Türkçe"]

  return (
    <FooterBottom>
      <Container>
        <Ulstyle>
            {Languages.map((lang) =>{
                return <Language language={lang}/>
            })}
        </Ulstyle>
      </Container>
      <Ulstyle2>
        <Listyle>CBS Interactive © 2021 Last.fm Ltd. All rights reserved Terms of Use Privacy Policy Legal Policies Cookies Policy Do Not Sell My Personal Information</Listyle>
        <Listyle> Jobs at ViacomCBS Last.fm Music</Listyle>
      </Ulstyle2>
    </FooterBottom>
  );
};

export default Footer;
