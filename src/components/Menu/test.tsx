import React from 'react';
import { renderWithTeme } from '../../test-utils';

import Menu from '.';

import theme from '../../styles/theme';
import { ThemeContext } from 'styled-components/native';

describe('<Menu />', () => {
  it('should render the menu', () => {
    const { getByTestId } = renderWithTeme(<Menu />);

    expect(getByTestId('menu')).toBeTruthy;
  });
});
