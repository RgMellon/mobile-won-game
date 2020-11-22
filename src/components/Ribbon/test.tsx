import React from 'react';
import { renderWithTeme } from '../../test-utils';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the Ribbon', () => {
    const { getByTestId, getByRole } = renderWithTeme(
      <Ribbon>Best Seller</Ribbon>,
    );

    const textRibon = getByRole('text').children;
    expect(textRibon.includes('Best Seller')).toBeTruthy();
  });

  it('should render with the primary color', () => {
    const { getByTestId } = renderWithTeme(<Ribbon> Best Seller</Ribbon>);

    const ribbon = getByTestId(/ribbon/i);

    expect(ribbon.props.style[0].backgroundColor).toEqual('#F231A5');
  });

  it('should render with the secondary color', () => {
    const { getByTestId } = renderWithTeme(
      <Ribbon color="secondary"> Best Seller</Ribbon>,
    );

    const ribbon = getByTestId(/ribbon/i);

    expect(ribbon.props.style[0].backgroundColor).toEqual('#3CD3C1');
  });
});
