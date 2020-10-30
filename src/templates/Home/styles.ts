import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SectionBanner = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`;
