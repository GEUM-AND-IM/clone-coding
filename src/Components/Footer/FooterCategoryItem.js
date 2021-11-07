import styled from "styled-components";

const CategoryItem = styled.li`
  width: 100%;
  height: 24px;
  color: white;
  list-style: none;
  font-size: 12px;
`;

const FooterCategoryItem = ({ categoryItemText }) => {
  return <CategoryItem>{categoryItemText}</CategoryItem>;
};

export default FooterCategoryItem;
