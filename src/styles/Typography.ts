import { css, DefaultTheme } from 'styled-components';

type TypographyVariant = keyof DefaultTheme['typography'];

export const applyTypography = (variant: TypographyVariant) => css`
  font-size: ${({ theme }) => theme.typography[variant].fontSize};
  line-height: ${({ theme }) => theme.typography[variant].lineHeight};
  font-weight: ${({ theme }) => theme.typography[variant].fontWeight};
  font-family: ${({ theme }) => theme.typography[variant].fontFamily};
`;
