import styled, { css } from 'styled-components/native';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  ${({ theme }) => css`
    position: relative;
    width: ${windowWidth - 65};
    height: 250px;
    background-color: ${theme.colors.white};
    margin-right: 20px;
    border-radius: ${theme.border.radius};
  `}
`;

export const ImageBox = styled.View`
  height: 160px;
  width: 100%;
  background: #f6f7f8;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;

export const Developer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;

export const Info = styled.View`
  max-width: 80%;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`;
