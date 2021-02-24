import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Index from '../pages/Index';
import SignIn from '../pages/SignIn';

import theme from '../styles/theme';

const App = createStackNavigator();

const Routes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: theme.colors.mainBg,
      },
    }}
  >
    <App.Screen name="Index" component={Index} />
    <App.Screen name="SignIn" component={SignIn} />
  </App.Navigator>
);

export default Routes;
