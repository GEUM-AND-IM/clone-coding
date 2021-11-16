import styled from "styled-components";
import Language from "./Language";
import FooterCategoryItem from "./FooterCategoryItem";
import FooterCategoryItemUl from "./FooterCategoryItemUl";

const FooterWrap = styled.div`
  width: 1170px;
  height: 100%;
`;

const FooterBottom = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--main-subDark-color);
  box-sizing: border-box;
  color: #666666;
  display: flex;
  flex-direction: column;
  opacity: 0.85;
  border-top: 1px solid rgba(192, 192, 192, 0.133);
`;

const Listyle = styled.li`
  list-style: none;
  margin: 8px 0px;
`;

const Ulstyle = styled.ul`
  height: 50px;
  display: flex;
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  column-gap: 10px;
`;

const UIstyleWrap = styled.div`
  display: flex;
  margin-top: 18px;
`;

const Ulstyle2 = styled.ul`
  margin: 0px;
  font-size: 12px;
  padding: 0px;
`;

const Span = styled.span`
  display: flex;
  align-items: top;
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

  const CategoryWrap = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 48px;
    display: flex;
    column-gap: 30px;
  `;

  const CategoryItems = [
    {
      title: "COMPANY",
      categoryItems: ["B1nd", "DoDam", "Daegu Software High School"],
    },
    {
      title: "HELP",
      categoryItems: ["Help", "Community Support"],
    },
    {
      title: "GOODIES",
      categoryItems: ["Developer API", "Free Music Downloads"],
    },
    {
      title: "ACCOUNT",
      categoryItems: ["Sign Up", "Log in"],
    },
    {
      title: "FOLLOW US",
      categoryItems: ["Facebook", "Twitter", "Instagram"],
    },
  ];

  return (
    <FooterWrap>
      <CategoryWrap>
        {CategoryItems.map((CategoryItems, index) => {
          return (
            <FooterCategoryItemUl
              categoryItemList={CategoryItems.categoryItems}
              title={CategoryItems.title}
              key={index}
            />
          );
        })}
      </CategoryWrap>
      <FooterBottom>
        <UIstyleWrap>
          <Ulstyle>
            {Languages.map((lang, index) => {
              return <Language language={lang} key={index} />;
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
    </FooterWrap>
  );
};

export default FooterForm;
