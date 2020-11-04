import 'jest-styled-components';

import React from 'react';
import { renderWithTeme } from '../../test-utils';

import BannerSlider from '.';

const items = [
  {
    image:
      'https://www.gamerview.com.br/wp-content/uploads/2018/11/Crashlands_bg.jpg',
    title: 'Crash Lands 1',
    subtitle: 'Play the ne Clash Lands game',
  },

  {
    image:
      'https://www.gamerview.com.br/wp-content/uploads/2018/11/Crashlands_bg.jpg',
    title: 'Crash Lands 2',
    subtitle: 'Play the ne Clash Lands game',
  },
];

describe('<BannerSlider />', () => {
  it('should render BannerSlider', () => {
    const { getByTestId, getByText } = renderWithTeme(
      <BannerSlider banners={items} />,
    );

    const bannerSlider = getByTestId('banner-slider');
    expect(bannerSlider.props.data).toHaveLength(2);

    const tileOnBannerSlider = getByText('Crash Lands 1');

    expect(tileOnBannerSlider.props.children).toEqual('Crash Lands 1');
  });
});
