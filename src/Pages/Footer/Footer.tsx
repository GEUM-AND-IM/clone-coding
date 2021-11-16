import FooterForm from "src/Components/Footer/FooterForm";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-subDark-color);
  padding: 48px 0px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterForm />
    </FooterContainer>
  );
};

export default Footer;
