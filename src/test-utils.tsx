import React from 'react';

import { render } from '@testing-library/react-native';

import theme from './styles/theme';

import { ThemeContext } from 'styled-components/native';

export const renderWithTeme = (children: React.ReactNode) =>
  render(
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  );
