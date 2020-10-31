import React from 'react';
import * as S from './styles';

export type CardProps = {
  title: string;
  developer: string;
  image: string;
};

const Card = ({ title, developer, image }: CardProps) => {
  return (
    <S.Container>
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
