import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const HeaderWrapper = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: ${theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>JBLY</Logo>
    </HeaderWrapper>
  );
};

export default Header;
