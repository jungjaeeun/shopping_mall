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

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "full" && prop !== "color",
})<{ full?: boolean; color?: string }>`
  border: none;
  background-color: ${(prop) => prop.color || theme.colors.primary};
  color: ${theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  width: ${(prop) => (prop.full ? "100%" : "160px")};
`;

Button.defaultProps = {
  full: false,
  color: theme.colors.primary,
};
