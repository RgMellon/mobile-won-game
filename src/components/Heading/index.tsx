import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export type HeadingProps = {
  children: string;
};

const Heading = ({ children }: HeadingProps) => {
  return (
    <S.Container>
      <S.BorderLeft />
      <S.Title accessibilityRole="text">{children}</S.Title>
    </S.Container>
  );
};

export default Heading;
