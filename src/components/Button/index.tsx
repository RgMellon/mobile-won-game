import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

export type ButtonProperties = {
  children: string;
  fullWidth?: boolean;
} & RectButtonProperties;

const Button = ({ children, fullWidth = false, ...rest }: ButtonProperties) => {
  return (
    <S.Container fullWidth={fullWidth} {...rest} testID="button">
      <S.TextButton accessibilityRole="text">{children}</S.TextButton>
    </S.Container>
  );
};

export default Button;
