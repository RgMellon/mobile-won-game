import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const DetailFooter = styled.View`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xlarge};
    background-color: ${theme.colors.white};
    transform: skew(0deg, -4deg);
  `}
`;

export const ContentFooter = styled.View`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    padding-top: ${theme.spacings.xxsmall};
    padding-left: ${theme.spacings.small}
    padding-right: ${theme.spacings.small}
    background-color: ${theme.colors.white};
    margin-top: -15px;

  `}
`;

export const LogoFooter = styled.Image`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Row = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    /* align-items: flex-start; */
  `}
`;

export const Column = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    width: 43%;
  `}
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};

    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const InfoContainer = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`;
