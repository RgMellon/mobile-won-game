import FeatherIcon from 'react-native-vector-icons/Feather';
import styled, { css, DefaultTheme } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;

const containerModifiers = {
  isErrored: () => css`
    border-color: #c53030;
  `,

  isFocused: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary};
  `,
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, isFocused, isErrored }) => css`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    margin-bottom: 15px;
    border-width: 1px;
    border-color: ${theme.colors.lightGray};
    flex-direction: row;
    align-items: center;

    ${!!isFocused && containerModifiers.isFocused(theme)}
    ${!!isErrored && containerModifiers.isErrored}
  `}
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  flex: 1;
  color: #fff;
`;
