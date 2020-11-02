import React from 'react';

import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  // buttonLabel: string;
  // buttonLink: string;
  alignment?: string;
};

const Highlight = ({
  title,
  backgroundImage,
  subtitle,
  floatImage,
  alignment = 'left',
}: HighlightProps) => {
  return (
    <S.Wrapper source={{ uri: backgroundImage }}>
      <S.Overlay alignment={alignment}>
        <S.WrapperImage>
          {!!floatImage && <S.FloatImage source={{ uri: floatImage }} />}
        </S.WrapperImage>

        <S.Content>
          <S.Title alignment={alignment}>{title}</S.Title>
          <S.Subtitle alignment={alignment}>{subtitle}</S.Subtitle>
        </S.Content>
      </S.Overlay>
    </S.Wrapper>
  );
};

export default Highlight;