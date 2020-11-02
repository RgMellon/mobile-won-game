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
  upcommingMoreGames: CardProps[];
  freeGamesHighLight: HighlightProps;
  freeGames: CardProps[];
};

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames,
  upcommingGames,
  upcommingHighLights,
  upcommingMoreGames,
  freeGamesHighLight,
  freeGames,
}: HomeTemplateProps) => {
  return (
    <S.Container>
      <Menu />

      <S.SectionBanner>
        <BannerSlider banners={banners} />
      </S.SectionBanner>

      <S.Section>
        <S.WrapperHeading hasPedding={false} marginBottom>
          <Heading>News</Heading>
        </S.WrapperHeading>

        <GameCardSlider games={newGames} />
      </S.Section>

      <S.WrapperHeading hasPedding>
        <Heading>Most Populars</Heading>
      </S.WrapperHeading>

      <S.SectionFullWidth>
        <Highlight {...mostPopularHighLight} />

        <S.Content>
          <GameCardSlider games={mostPopularGames} />
        </S.Content>
      </S.SectionFullWidth>

      <S.Section>
        <S.WrapperHeading hasPedding={false} marginBottom>
          <Heading>Up coming</Heading>
        </S.WrapperHeading>

        <GameCardSlider games={upcommingGames} />
      </S.Section>

      <S.SectionFullWidth>
        <Highlight {...upcommingHighLights} />

        <S.Section>
          <GameCardSlider games={upcommingMoreGames} />
        </S.Section>
      </S.SectionFullWidth>

      <S.WrapperHeading hasPedding>
        <Heading>Free Games</Heading>
      </S.WrapperHeading>

      <S.SectionFullWidth>
        <Highlight {...freeGamesHighLight} />

        <S.Section>
          <GameCardSlider games={freeGames} />
        </S.Section>
      </S.SectionFullWidth>
    </S.Container>
  );
};

export default Home;
