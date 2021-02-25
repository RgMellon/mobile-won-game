import 'react-native-gesture-handler';
export { default } from '../storybook';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.mainBg}
          translucent
        />

        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
