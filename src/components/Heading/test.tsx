import 'jest-styled-components';

import React from 'react';
import { renderWithTeme } from '../../test-utils';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the Heading', () => {
    const { getByRole, getByTestId } = renderWithTeme(
      <Heading>Won Games</Heading>,
    );
    expect(getByRole('text')).toBeTruthy();
  });
});
