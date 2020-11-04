import React from 'react';

import { renderWithTeme } from '../../test-utils';

import GameCardSlider from '.';

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image:
      'https://invisioncommunity.co.uk/wp-content/uploads/2020/02/Population-Zero.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
    ribbon: '20% OFF',
    ribbonSize: 'small',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image:
      'https://invisioncommunity.co.uk/wp-content/uploads/2020/02/Population-Zero.jpg',
    price: 'R$ 235,00',
    // promotionalPrice: 'R$ 215,00',
  },
];

describe('<GameCardSlider />', () => {
  it('should render BannerSlider', () => {
    const { getByTestId, getByText } = renderWithTeme(
      <GameCardSlider games={items} />,
    );

    const gameCardSlider = getByTestId('game-card-slider');
    expect(gameCardSlider.props.data).toHaveLength(2);

    // const tileOnBannerSlider = getByText('Crash Lands 1');

    // expect(tileOnBannerSlider.props.children).toEqual('Crash Lands 1');
  });
});
