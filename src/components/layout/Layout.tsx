import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { media, sizes } from "../../styles/media";

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: ${sizes["tablet"]}px;
  margin: auto;
`;

const ContentWrap = styled.main`
  flex-grow: 1;
  ${media.tablet`
    padding: 0 12px;
  `};
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrap>
      <Header />
      <ContentWrap>{children}</ContentWrap>
      <Footer />
    </LayoutWrap>
  );
};

export default Layout;
