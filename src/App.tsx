import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import Home from './pages/Index';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.mainBg}
          translucent
        />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.mainBg,
          }}
        >
          <SignIn />
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
