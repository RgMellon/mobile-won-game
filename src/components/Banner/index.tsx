import React from 'react';
import { Text, View } from 'react-native';

import Button from '../Button';

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
      <S.Image accessibilityRole="image" source={{ uri: image }} />
      <S.Caption>
        <S.Title accessibilityRole="text">{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>

        <Button>Buy Now </Button>
      </S.Caption>
    </S.Container>
  );
};

export default Banner;
