import React from 'react';
import { Image, Text, View } from 'react-native';

import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';
import theme from 'src/styles/theme';

import * as S from './styles';

const Menu: React.FC = () => {
  return (
    <S.Container>
      <Icon name="menu" size={24} color="#DADADA" />

      <S.LogoWrapper>
        <Image source={logoImg} />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.WrapperIcon>
          <Icon name="search" size={24} color="#DADADA" />
        </S.WrapperIcon>

        <S.WrapperIcon>
          <Icon name="shopping-cart" size={24} color="#DADADA" />
        </S.WrapperIcon>
      </S.MenuGroup>
    </S.Container>
  );
};

export default Menu;
