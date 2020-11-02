import styled, { css } from 'styled-components/native';

type HeadingProp = {
  hasPedding: boolean;
  marginBottom?: boolean;
};

export const Container = styled.ScrollView`
  flex: 1;
`;

export const SectionBanner = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const Section = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
  `}
`;

export const SectionFullWidth = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const WrapperHeading = styled.View<HeadingProp>`
  ${({ theme, hasPedding, marginBottom }) => css`
    margin-bottom: ${marginBottom ? theme.spacings.medium : '0px'}
    padding-left: ${hasPedding ? theme.spacings.small : '0px'};
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium}
    padding-left: ${theme.spacings.small};
  `}
`;
