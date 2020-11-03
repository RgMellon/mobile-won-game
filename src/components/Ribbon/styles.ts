import { darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components/native';

import { RibbonColors, RibbonPros } from '.';

type RibbonDetail = {
  color: RibbonColors;
};

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,
};

export const RibbonDetail = styled.View<RibbonDetail>`
  ${({ theme, color }) => css`
    position: absolute;
    right: 0;

    border-style: solid;
    border-left-width: 0px;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-bottom-width: 10px;

    top: 26px;
    border-top-width: 10px;
    border-right-width: 15px;

    border-left-color: ${darken(0.2, theme.colors[color])};
    border-top-color: ${darken(0.2, theme.colors[color])};
  `}
`;

export const Wrapper = styled.View<Omit<RibbonPros, 'children'>>`
  ${({ theme, color }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    z-index: ${theme.layers.base}
    justify-content: center;


    height: 26px;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    right: -15px;

    ${!!color && wrapperModifiers.color(theme, color)}

  `}
`;

export const TextContent = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`;
