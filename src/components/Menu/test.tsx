import React from 'react';
import { renderWithTeme } from '../../test-utils';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    const { getByTestId, getByRole } = renderWithTeme(<Menu />);

    expect(getByTestId('menu')).toBeTruthy;
    expect(getByRole('image'));
  });
});
