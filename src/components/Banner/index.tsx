import React from 'react';
import { Text, View } from 'react-native';

import * as S from './styles';

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  // buttonLabel: string;
  // buttonLink: string;
  // ribbon?: string;
  // ribbonSize?: RibbonSizes;
  // ribbonColor?: RibbonColors;
};

const Banner = ({ image, title, subtitle }: BannerProps) => {
  return (
    <S.Container>
      <S.Image source={{ uri: image }} />
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Caption>
    </S.Container>
  );
};

export default Banner;
