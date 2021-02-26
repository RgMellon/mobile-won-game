import React from 'react';
import { storiesOf } from '@storybook/react-native';
import GameInfo from '.';
import CenterView from '../../../storybook/stories/CenterView';
import { withKnobs, object } from '@storybook/addon-knobs';

export const gameInfoProps = {
  title: 'The Witcher',
  description:
    'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais',
  price: 25,
};

storiesOf('GameInfo', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <CenterView>
      <GameInfo {...gameInfoProps} />
    </CenterView>
  ));
