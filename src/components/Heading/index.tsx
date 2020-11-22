import React from 'react';

import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: string;
  lineBottom?: boolean;
  size?: 'medium' | 'large';
  lineColor?: LineColors;
  color?: 'white' | 'black';
};

const Heading = ({
  children,
  lineBottom,
  color = 'white',
  size = 'medium',
}: HeadingProps) => {
  return (
    <S.Container>
      {!lineBottom && <S.BorderLeft />}
      <S.Title size={size} color={color} accessibilityRole="text">
        {children}
      </S.Title>
      {!!lineBottom && <S.BorderBottom testID="border-bottom" />}
    </S.Container>
  );
};

export default Heading;
