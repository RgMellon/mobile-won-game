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

export const Content = styled.View``;

export const ContentHeading = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
  `}
`;

export const ContentCard = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
  `}
`;

export const ContentFullWidth = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    /* margin-bottom: ${theme.spacings.small}; */
  `}
`;

export const FooterContainer = styled.View`
  ${({ theme }) => css``}
`;
