import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 620px;
  margin: auto;
`;

const ContentWrapper = styled.main`
  flex-grow: 1;
  padding: 16px;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
