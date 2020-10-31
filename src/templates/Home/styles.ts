import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const SectionBanner = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const SectionNews = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
  `}
`;

export const WrapperHeading = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`;
