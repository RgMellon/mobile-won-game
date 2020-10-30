import React from 'react';

import Banner, { BannerProps } from '../Banner';

import * as S from './styles';

export type BannerSliderProps = {
  banners: BannerProps[];
};

const BannerSlider = ({ banners }: BannerSliderProps) => {
  return (
    <S.BannerSlide
      horizontal={true}
      data={banners}
      // keyExtractor={provider => provider.id}

      renderItem={({ item: banner }) => <Banner {...banner} />}
    />
  );
};

export default BannerSlider;
