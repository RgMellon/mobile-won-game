import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};
  `}
`;

export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 120px;
`;
