import 'jest-styled-components';

import mock from '../Highlight/mock';

import React from 'react';
import { renderWithTeme } from '../../test-utils';

import Highlight from '.';
import { waitForElement } from '@testing-library/react-native';

const u = {
  title: 'Read Dead is back!',
  subtitle: 'Come see John’s new adventures',
  backgroundImage: 'https://i.imgur.com/QckxqIO.png',
  alignment: 'right',
} as const;

describe('<Highlight />', () => {
  it('should render the Highlight', () => {
    const { getByRole, getByText } = renderWithTeme(<Highlight {...mock[0]} />);

    expect(getByRole('image')).toBeTruthy();

    expect(getByText('Read Dead is back!')).toBeTruthy();
    expect(getByText('Come see John’s new adventures')).toBeTruthy();
  });
});
