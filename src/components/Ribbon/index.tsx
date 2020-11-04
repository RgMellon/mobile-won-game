import React from 'react';

import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';

export type RibbonPros = {
  children: React.ReactNode;
  color?: RibbonColors;
};

const Ribbon = ({ children, color = 'primary' }: RibbonPros) => (
  <>
    <S.Wrapper color={color} testID="ribbon">
      <S.RibbonDetail color={color} />
      <S.TextContent> {children} </S.TextContent>
    </S.Wrapper>
  </>
);

export default Ribbon;
