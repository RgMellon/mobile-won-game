import React from 'react';

import Menu from '../../components/Menu';

import * as S from './styles';

import BannerSlider from '../../components/BannerSlider';
import { BannerProps } from '../../components/Banner';

export type HomeTemplateProps = {
  banners: BannerProps[];
};

const Home = ({ banners }: HomeTemplateProps) => {
  return (
    <S.Container>
      <Menu />

      <S.SectionBanner>
        <BannerSlider banners={banners} />
      </S.SectionBanner>
    </S.Container>
  );
};

export default Home;
