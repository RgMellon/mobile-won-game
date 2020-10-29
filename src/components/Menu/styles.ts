import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
    position: relative;
    margin-top: 20px;
  `}
`;

export const MenuGroup = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
  `}
`;

export const LogoWrapper = styled.View`
  position: absolute;
  left: 50%;
`;

export const WrapperIcon = styled.View`
  margin-left: 20px;
`;
