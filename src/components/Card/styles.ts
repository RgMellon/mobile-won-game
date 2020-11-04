import styled, { css } from 'styled-components/native';

import { Dimensions } from 'react-native';
const cardWidth = `${Dimensions.get('window').width - 73}px`;

export const Container = styled.View`
  ${({ theme }) => css`
    position: relative;
    width: ${cardWidth};
    height: 270px;
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
  width: 70%;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    position: relative;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const FavContainer = styled.View`
  width: 30%;
  align-items: flex-end;
`;

export const FavButton = styled.TouchableOpacity`
  width: 30px;
  justify-content: center;
  align-items: center;
`;

export const ContainerPrice = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
    justify-content: flex-end;
    align-items: center;
    margin-right: -8px;
  `}
`;

export const WrapperPrice = styled.View`
  ${({ theme }) => css`
    width: 78px;
    height: 22px;
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.radius}
    justify-content: center;
    align-items: center;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const PromotionalPrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `}
`;
