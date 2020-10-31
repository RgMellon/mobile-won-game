import React from 'react';

import Banner, { BannerProps } from '../Banner';

import * as S from './styles';
import Card, { CardProps } from '../Card/';

export type GameCardSliders = {
  games: CardProps[];
};

const GameCardSlider = ({ games }: GameCardSliders) => {
  return (
    <S.GameCardSlider
      horizontal={true}
      data={games}
      showsHorizontalScrollIndicator={false}
      // keyExtractor={provider => provider.id}

      renderItem={({ item: gameCard }) => <Card {...gameCard} />}
    />
  );
};

export default GameCardSlider;
