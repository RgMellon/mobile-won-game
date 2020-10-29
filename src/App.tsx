import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import Menu from './components/Menu';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.secondary}
          translucent
        />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.mainBg,
          }}
        >
          <Menu />
          <Text> ooii</Text>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
