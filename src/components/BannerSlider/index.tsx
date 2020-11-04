import React from 'react';

import Banner, { BannerProps } from '../Banner';

import * as S from './styles';

export type BannerSliderProps = {
  banners: BannerProps[];
};

const BannerSlider = ({ banners }: BannerSliderProps) => {
  return (
    <S.BannerSlide
      testID="banner-slider"
      horizontal={true}
      data={banners}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item: banner }) => <Banner {...banner} />}
    />
  );
};

export default BannerSlider;
