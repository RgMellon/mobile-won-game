import React from 'react';
import theme from '../../styles/theme';

const item = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image:
    'https://invisioncommunity.co.uk/wp-content/uploads/2020/02/Population-Zero.jpg',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 215,00',
  ribbon: '20% OFF',
  ribbonSize: 'small',
};

import Card from '.';
import { renderWithTeme } from '../../test-utils';

describe('<Card />', () => {
  it('should render the Card', () => {
    const { getByTestId, getByRole } = renderWithTeme(<Card {...item} />);

    const titleCardValue = getByTestId('title-card').props.children;
    expect(titleCardValue).toEqual('Population Zero');

    const developerValue = getByTestId('developer-card').props.children;
    expect(developerValue).toEqual('Rockstar Games');

    expect(getByRole('image')).toBeTruthy();
  });

  it('should render a line-through when price is promotional', () => {
    const { getByTestId } = renderWithTeme(<Card {...item} />);

    const promotionalPrice = getByTestId('promotional-price');
    expect(promotionalPrice.props.style[0].textDecorationLine).toEqual(
      'line-through',
    );
  });

  it('should render a ribon', () => {
    const { getByTestId } = renderWithTeme(<Card {...item} />);

    const ribbon = getByTestId('ribbon');

    expect(ribbon).toBeTruthy();
  });
});
