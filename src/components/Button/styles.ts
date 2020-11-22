import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { ButtonProperties } from '.';

type ButtonPropStyles = Pick<ButtonProperties, 'fullWidth'>;

export const Container = styled(RectButton)<ButtonPropStyles>`
  ${({ theme, fullWidth }) => css`
    border-radius: ${theme.border.radius};
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary}
    height: 40px;
    width: ${fullWidth ? '100%' : '127px'};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `}
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};
  `}
`;
