import { AppRegistry } from 'react-native';
import { loadStories } from './storyLoader';
import theme from '../src/styles/theme';
import {
  getStorybookUI,
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { withTheme } from 'storybook-addon-ondevice-styled-theme';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(withTheme);

addParameters({
  themes: [theme],
});

// import stories
configure(() => {
  loadStories();
  // require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('wonGames', () => StorybookUIRoot);

export default StorybookUIRoot;
