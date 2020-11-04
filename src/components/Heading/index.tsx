import { border } from 'polished';
import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: string;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
  lineColor?: LineColors;
  color?: 'white' | 'black';
};

const Heading = ({ children, lineBottom, color = 'white' }: HeadingProps) => {
  return (
    <S.Container>
      {!lineBottom && <S.BorderLeft />}
      <S.Title color={color} accessibilityRole="text">
        {children}
      </S.Title>
      {!!lineBottom && <S.BorderBottom testID="border-bottom" />}
    </S.Container>
  );
};

export default Heading;
