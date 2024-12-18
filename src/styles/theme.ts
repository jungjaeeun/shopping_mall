export const theme = {
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#F2F2F2",
    textPrimary: "#000000",
    textSecondary: "#666666",
    border: "#E0E0E0",
    background: "#FFFFFF",
  },
  fonts: {
    primary: "Noto Sans, sans-serif",
    secondary: "Roboto, sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export type ThemeType = typeof theme;
