import React, { useCallback } from 'react';
import Ribbon, { RibbonColors } from '../Ribbon';
import * as S from './styles';

import Icon from 'react-native-vector-icons/Feather';

export type CardProps = {
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
  image: string;
  ribbon?: string;
  ribbonColor?: RibbonColors;
};

const Card = ({
  title,
  developer,
  image,
  ribbon,
  ribbonColor,
  price,
  promotionalPrice,
}: CardProps) => {
  const handleFav = useCallback(() => {
    console.log('oi');
  }, []);

  return (
    <S.Container testID="game-card">
      {!!ribbon && <Ribbon color={ribbonColor}>{ribbon}</Ribbon>}

      <S.ImageBox>
        <S.Image accessibilityRole="image" source={{ uri: image }} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title testID="title-card">{title}</S.Title>
          <S.Developer testID="developer-card">{developer}</S.Developer>
        </S.Info>

        <S.FavContainer>
          <S.FavButton onPress={handleFav}>
            <Icon name="heart" size={24} color="#F231A5" />
          </S.FavButton>
        </S.FavContainer>
      </S.Content>

      <S.ContainerPrice>
        {!!promotionalPrice && (
          <S.PromotionalPrice testID="promotional-price">
            {price}
          </S.PromotionalPrice>
        )}
        <S.WrapperPrice>
          <S.Price> {promotionalPrice || price} </S.Price>
        </S.WrapperPrice>
      </S.ContainerPrice>
    </S.Container>
  );
};

export default Card;
