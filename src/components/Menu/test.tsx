import React from 'react';
// import { fireEvent } from '@testing-library/react-native';
import { renderWithTeme } from '../../test-utils';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    const { getByTestId, getByRole } = renderWithTeme(<Menu />);

    expect(getByTestId('menu')).toBeTruthy;
    expect(getByRole('image'));
  });
});
