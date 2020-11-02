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

      <S.Content>
        <S.ContentHeading>
          <Heading>News</Heading>
        </S.ContentHeading>

        <S.ContentCard>
          <GameCardSlider games={newGames} />
        </S.ContentCard>
      </S.Content>

      <S.ContentFullWidth>
        <S.ContentHeading>
          <Heading>Most Populars</Heading>
        </S.ContentHeading>

        <S.ContentFullWidth>
          <Highlight {...mostPopularHighLight} />
        </S.ContentFullWidth>

        <S.ContentCard>
          <GameCardSlider games={mostPopularGames} />
        </S.ContentCard>
      </S.ContentFullWidth>

      <S.Content>
        <S.ContentHeading>
          <Heading>Up coming</Heading>
        </S.ContentHeading>

        <S.ContentCard>
          <GameCardSlider games={upcommingGames} />
        </S.ContentCard>

        <S.ContentFullWidth>
          <Highlight {...upcommingHighLights} />

          <S.ContentCard>
            <GameCardSlider games={upcommingMoreGames} />
          </S.ContentCard>
        </S.ContentFullWidth>
      </S.Content>

      <S.Content>
        <S.ContentHeading>
          <Heading>Free Games</Heading>
        </S.ContentHeading>

        <S.ContentFullWidth>
          <Highlight {...freeGamesHighLight} />
        </S.ContentFullWidth>
      </S.Content>

      <S.ContentCard>
        <GameCardSlider games={freeGames} />
      </S.ContentCard>
    </S.Container>
  );
};

export default Home;
