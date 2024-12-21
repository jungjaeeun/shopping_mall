import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: ${theme.colors.primary};
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundWrapper>
      <h1>404 - Page Not Found</h1>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
