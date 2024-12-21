import { css, CSSObject, DefaultTheme, Interpolation } from "styled-components";

type DeviceType = "desktop" | "tablet" | "phone";

export const sizes: Record<DeviceType, number> = {
  desktop: 1200,
  tablet: 768,
  phone: 600,
};

const media = Object.fromEntries(
  Object.entries(sizes).map(([device, size]) => [
    device,
    (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<DefaultTheme>[]
    ) => css`
      @media (max-width: ${size}px) {
        ${css(first, ...interpolations)}
      }
    `,
  ])
) as Record<
  DeviceType,
  (
    first: CSSObject | TemplateStringsArray,
    ...interpolations: Interpolation<DefaultTheme>[]
  ) => ReturnType<typeof css>
>;

export { media };
