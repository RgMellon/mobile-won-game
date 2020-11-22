import React from 'react';

import * as S from './styles';

import logo from '../../assets/logoFooter.png';
import Heading from '../../components/Heading';

export type signInTemplateProps = {
  children: React.ReactNode;
  headingText: string;
};

const SignInTemplate = ({ children, headingText }: signInTemplateProps) => {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo source={logo} />
      </S.LogoContainer>

      <S.Content>
        <S.WrapperHeading>
          <Heading size="large" color="black">
            {headingText}
          </Heading>
        </S.WrapperHeading>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default SignInTemplate;
