import React from 'react';
import Heading from '../Heading';
import * as S from './styles';

import logoFooter from '../../assets/logoFooter.png';

const Footer = () => {
  return (
    <S.Container>
      <S.DetailFooter />
      <S.ContentFooter>
        <S.LogoFooter source={logoFooter} />
        <S.Row>
          <S.Column>
            <Heading color="black" size="small" lineBottom>
              Contact
            </Heading>

            <S.InfoContainer>
              <S.Info>suporte@wongames.gg</S.Info>

              <S.Info>+55 21 33283719</S.Info>
            </S.InfoContainer>
          </S.Column>

          <S.Column>
            <Heading color="black" size="small" lineBottom>
              Follow us
            </Heading>

            <S.InfoContainer>
              <S.Info>Instagram</S.Info>
              <S.Info>Twitter</S.Info>
              <S.Info>Youtube</S.Info>
              <S.Info>Facebook</S.Info>
            </S.InfoContainer>
          </S.Column>
        </S.Row>

        <S.Row>
          <S.Column>
            <Heading color="black" size="small" lineBottom>
              Links
            </Heading>

            <S.InfoContainer>
              <S.Info>Loja</S.Info>
              <S.Info>Explorar</S.Info>
              <S.Info>Buscar</S.Info>
              <S.Info>FAQ</S.Info>
            </S.InfoContainer>
          </S.Column>

          <S.Column>
            <Heading color="black" size="small" lineBottom>
              Location
            </Heading>

            <S.InfoContainer>
              <S.Info>Rua 7 de Maio</S.Info>
              <S.Info>527 - 89020330</S.Info>
              <S.Info>Rio de Janeiro, Brasil</S.Info>
            </S.InfoContainer>
          </S.Column>
        </S.Row>
      </S.ContentFooter>
    </S.Container>
  );
};

export default Footer;
