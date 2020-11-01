import styled, { css } from 'styled-components/native';
import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'alignment'>;

const wrapperModifiers = {
  right: () => css`
    flex-direction: row-reverse;
  `,

  left: () => css`
    flex-direction: row;
  `,
};

export const Wrapper = styled.ImageBackground`
  position: relative;
  height: 230px;
`;

export const Overlay = styled.View<WrapperProps>`
  ${({ alignment }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    ${wrapperModifiers[alignment!]()}
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    width: 60%;
  `}
`;

export const Title = styled.Text<WrapperProps>`
  ${({ theme, alignment }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-align: ${alignment === 'left' ? 'right' : 'left'};
  `}
`;

export const Subtitle = styled.Text<WrapperProps>`
  ${({ theme, alignment }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
    text-align: ${alignment === 'left' ? 'right' : 'left'};
  `}
`;

export const WrapperImage = styled.View`
  width: 40%;
  /* background: red; */
`;

export const FloatImage = styled.Image`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    min-height: 137px;
    max-width: 100%;

    flex: 1;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxlarge};
    /* align-self: flex-start; */
  `}
`;
