import styled from "styled-components";
import { theme } from "../../styles/theme";
import { textEllipsis } from "../../styles/GlobalStyle";

export const Desc = styled.p`
  font-size: 14px;
  color: ${theme.colors.textPrimary};
`;

export const Category = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.textSecondary};
  ${textEllipsis}
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.textPrimary};
  ${textEllipsis}
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.textSecondary};
`;
