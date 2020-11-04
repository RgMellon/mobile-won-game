import 'jest-styled-components';

import React from 'react';
import { renderWithTeme } from '../../test-utils';

import Banner from '.';

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { getByText, getByRole } = renderWithTeme(
      <Banner
        image="https://www.overclockers.co.uk/media/image/Cyberpunk-2077-banner.png"
        title="Cyber Punk 2077"
        subtitle="Play the new Epic Game"
      />,
    );

    const bannerTitle = getByText('Cyber Punk 2077');
    const bannerSubtitle = getByText('Play the new Epic Game');

    expect(bannerTitle.props.children).toEqual('Cyber Punk 2077');
    expect(bannerSubtitle.props.children).toEqual('Play the new Epic Game');

    expect(getByRole('image')).toBeTruthy();
  });
});
