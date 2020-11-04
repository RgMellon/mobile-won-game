import React from 'react';

import { render, RenderAPI } from '@testing-library/react-native';

import theme from './styles/theme';

import { ThemeContext } from 'styled-components/native';

export const renderWithTeme = (children: React.ReactNode): RenderAPI => {
  return render(
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>,
  );
};
