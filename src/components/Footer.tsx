import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const FooterWrapper = styled.footer`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>© 2024 Abley, All Rights Reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
