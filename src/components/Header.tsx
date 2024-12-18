import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

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

const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.medium};
`;

const NavItem = styled.a`
  color: ${theme.colors.secondary};
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>JBLY</Logo>
      <Nav>
        <NavItem href="#">Cart</NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
