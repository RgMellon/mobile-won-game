import React from 'react';
import formatPrice from '../../utils/format-price';
import Button from '../Button';
import Heading from '../Heading';
import Ribbon from '../Ribbon';

export type GameInfoProps = {
  title: string;
  description: string;
  price: number;
};

import * as S from './styles';

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Container>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

      <S.Description> {description} </S.Description>

      <S.ButtonWrapper>
        <Button fullWidth icon="shopping-cart">
          Add to cart
        </Button>

        <Button fullWidth minimal icon="mail">
          Wishlist
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default GameInfo;
