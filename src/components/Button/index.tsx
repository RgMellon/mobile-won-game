import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

import * as S from './styles';

export type ButtonProperties = {
  children: string;
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: string;
} & RectButtonProperties;

const Button = ({
  children,
  fullWidth = false,
  minimal = false,
  icon,
  ...rest
}: ButtonProperties) => {
  return (
    <S.Container
      minimal={minimal}
      fullWidth={fullWidth}
      {...rest}
      testID="button"
    >
      {!!icon && (
        <S.Icon
          name={icon}
          color={minimal ? theme.colors.primary : theme.colors.white}
        />
      )}
      <S.TextButton minimal={minimal} accessibilityRole="text">
        {children}
      </S.TextButton>
    </S.Container>
  );
};

export default Button;
