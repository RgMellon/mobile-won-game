import styled, { css, DefaultTheme } from 'styled-components/native';
import { HeadingProps } from '.';

type TitleHeadingProps = Pick<HeadingProps, 'color' | 'size'>;

const titleModifier = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,

  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
};

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    position: relative;
  `}
`;

export const Title = styled.Text<TitleHeadingProps>`
  ${({ theme, color, size }) => css`
    font-weight: bold;

    ${!!color && titleModifier[color!](theme)};
    ${!!size && titleModifier[size!](theme)};
  `}
`;

export const BorderLeft = styled.View`
  ${({ theme }) => css`
    width: 10px;
    height: 36px;
    background: ${theme.colors.secondary};
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const BorderBottom = styled.View`
  ${({ theme }) => css`
    width: 22px;
    margin-top: ${theme.spacings.xxsmall};
    border: 4px solid #3cd3c1;
    position: absolute;
    top: 20px;
    left: 0px;
  `}
`;
