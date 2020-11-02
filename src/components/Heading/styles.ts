import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    /* padding-left: ${theme.spacings.small}; */
    flex-direction: row;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.lightGray};
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