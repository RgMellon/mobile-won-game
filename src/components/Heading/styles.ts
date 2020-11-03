import styled, { css, DefaultTheme } from 'styled-components/native';
import { HeadingProps } from '.';

type TitleHeadingProps = Pick<HeadingProps, 'color'>;

const titleModifier = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,

  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
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
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.large};
    ${!!color && titleModifier[color!](theme)}}};

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
