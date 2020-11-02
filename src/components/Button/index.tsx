import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

type ButtonProperties = {
  children: string;
} & RectButtonProperties;

const Button = ({ children, ...rest }: ButtonProperties) => {
  return (
    <S.Container {...rest}>
      <S.TextButton>{children}</S.TextButton>
    </S.Container>
  );
};

export default Button;
