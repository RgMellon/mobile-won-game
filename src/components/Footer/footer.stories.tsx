import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Footer from '.';
import CenterView from '../../../storybook/stories/CenterView';
import { withKnobs, object } from '@storybook/addon-knobs';
import { View } from 'react-native';
import theme from '../../styles/theme';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <View style={{ backgroundColor: theme.colors.mainBg, flex: 1 }}>
      <Footer />
    </View>
  ));
