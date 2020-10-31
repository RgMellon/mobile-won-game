import React from 'react';

import Menu from '../../components/Menu';
import BannerSlider from '../../components/BannerSlider';
import { BannerProps } from '../../components/Banner';
import Heading from '../../components/Heading';
import GameCardSlider from '../../components/GameCardSlider';

import * as S from './styles';
import { CardProps } from 'src/components/Card';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: CardProps[];
};

const Home = ({ banners, newGames }: HomeTemplateProps) => {
  return (
    <S.Container>
      <Menu />

      <S.SectionBanner>
        <BannerSlider banners={banners} />
      </S.SectionBanner>

      <S.SectionNews>
        <S.WrapperHeading>
          <Heading>News</Heading>
        </S.WrapperHeading>

        <GameCardSlider games={newGames} />
      </S.SectionNews>
    </S.Container>
  );
};

export default Home;
