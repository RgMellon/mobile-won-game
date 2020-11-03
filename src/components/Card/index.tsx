import React from 'react';
import Ribbon, { RibbonColors } from '../Ribbon';
import * as S from './styles';

export type CardProps = {
  title: string;
  developer: string;
  image: string;
  ribbon?: string;
  ribbonColor?: RibbonColors;
};

const Card = ({ title, developer, image, ribbon, ribbonColor }: CardProps) => {
  return (
    <S.Container>
      {!!ribbon && <Ribbon color={ribbonColor}>{ribbon}</Ribbon>}

      <S.ImageBox>
        <S.Image source={{ uri: image }} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </S.Content>
    </S.Container>
  );
};

export default Card;
