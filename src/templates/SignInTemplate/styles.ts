import styled, { css } from 'styled-components/native';

export const Logo = styled.Image`
  width: 200px;
  height: 60px;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`;

export const LogoContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    margin-top: 112px;
  `}
`;

export const WrapperHeading = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`;
