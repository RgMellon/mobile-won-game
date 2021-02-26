import FeatherIcon from 'react-native-vector-icons/Feather';
import styled, { css, DefaultTheme } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { ButtonProperties } from '.';

type ButtonPropStyles = Pick<ButtonProperties, 'fullWidth' | 'minimal'>;

const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  minimal: () => css`
    background: transparent;
  `,
};

export const Container = styled(RectButton)<ButtonPropStyles>`
  ${({ theme, fullWidth, minimal }) => css`
    border-radius: ${theme.border.radius};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary}
    height: 40px;
    width: 127px;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};

    ${!!minimal && wrapperModifiers.minimal()}
    ${!!fullWidth && wrapperModifiers.fullWidth}
  `}
`;

const textButtonsModifiers = {
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
  `,

  minimal: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
};

export const TextButton = styled.Text<ButtonPropStyles>`
  ${({ theme, minimal }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};

    ${!!minimal && textButtonsModifiers.minimal(theme)}
  `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 20px;
`;
