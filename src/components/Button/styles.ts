import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary}
    height: 40px;
    width: 127px;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `}
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};
  `}
`;
