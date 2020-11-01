import React from 'react';

import Menu from '../../components/Menu';
import BannerSlider from '../../components/BannerSlider';
import { BannerProps } from '../../components/Banner';
import Heading from '../../components/Heading';
import GameCardSlider from '../../components/GameCardSlider';
import Highlight, { HighlightProps } from '../../components/Highlight';

import * as S from './styles';
import { CardProps } from '../../components/Card';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: CardProps[];
  mostPopularHighLight: HighlightProps;
  mostPopularGames: CardProps[];
  upcommingGames: CardProps[];
  upcommingHighLights: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames,
  upcommingGames,
  upcommingHighLights,
}: HomeTemplateProps) => {
  return (
    <S.Container>
      <Menu />

      <S.SectionBanner>
        <BannerSlider banners={banners} />
      </S.SectionBanner>

      <S.Section>
        <S.WrapperHeading hasPedding={false}>
          <Heading>News</Heading>
        </S.WrapperHeading>

        <GameCardSlider games={newGames} />
      </S.Section>

      <S.SectionMostPopular>
        <S.WrapperHeading hasPedding>
          <Heading>Most Populars</Heading>
        </S.WrapperHeading>

        <Highlight {...mostPopularHighLight} />

        <S.Content>
          <GameCardSlider games={mostPopularGames} />
        </S.Content>
      </S.SectionMostPopular>

      <S.Section>
        <S.WrapperHeading hasPedding={false}>
          <Heading>Up coming</Heading>
        </S.WrapperHeading>

        <GameCardSlider games={upcommingGames} />
      </S.Section>

      <S.SectionMostPopular>
        <Highlight {...upcommingHighLights} />
      </S.SectionMostPopular>
    </S.Container>
  );
};

export default Home;
