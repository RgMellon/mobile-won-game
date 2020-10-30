import styled, { css } from 'styled-components/native';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  /* width: 100%; */
  /* background: red; */
  /* flex: 1; */
`;

export const Image = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth};
    height: 230px;
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Caption = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
  `}
`;
