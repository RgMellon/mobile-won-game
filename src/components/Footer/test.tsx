import React from 'react';
import theme from '../../styles/theme';

import Footer from '.';
import { renderWithTeme } from '../../test-utils';

describe('<Footer />', () => {
  it('should render the Footer', () => {
    const { getByTestId, getByRole, getByText } = renderWithTeme(<Footer />);

    expect(getByText('Contact')).toBeTruthy();
    expect(getByText('Follow us')).toBeTruthy();
    expect(getByText('Links')).toBeTruthy();
    expect(getByText('Location')).toBeTruthy();
  });
});
