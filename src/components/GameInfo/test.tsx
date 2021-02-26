import React from 'react';
import { renderWithTeme } from '../../test-utils';

import GameInfo from '.';

const props = {
  title: 'The Witcher',
  description: 'description',
  price: 25,
};

describe('<GameInfo />', () => {
  it('should render the game information', () => {
    const { getByText } = renderWithTeme(<GameInfo {...props} />);

    expect(getByText('The Witcher')).toBeTruthy();
    expect(getByText(/description/i)).toBeTruthy();
    expect(getByText(/\$25\.00/)).toBeTruthy();
  });

  it('should render Buttons', () => {
    const { getByText } = renderWithTeme(<GameInfo {...props} />);
    const buttonShop = getByText('Add to cart');
    expect(buttonShop).toBeTruthy();

    const buttonWishList = getByText('Wishlist');
    expect(buttonWishList).toBeTruthy();
  });
});
