import styled from "styled-components";
import FooterCategoryItem from "./FooterCategoryItem";

const CategoryItemWrap = styled.ul`
  width: 172px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

const CategoryItemTitle = styled.div`
  width: 100%;
  height: 24px;
  color: #fff;
  opacity: 0.3;
  font-size: 12px;
`;

const FooterCategoryItemUl = ({ categoryItemList, title }) => {
  return (
    <CategoryItemWrap>
      <CategoryItemTitle>{title}</CategoryItemTitle>
      {categoryItemList.map((categoryItem, index) => {
        return (
          <FooterCategoryItem categoryItemText={categoryItem} key={index} />
        );
      })}
    </CategoryItemWrap>
  );
};

export default FooterCategoryItemUl;
