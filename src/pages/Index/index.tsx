import React, { useState } from 'react';
import Home, { HomeTemplateProps } from '../../templates/Home';

import bannerMock from '../../components/Banner/bannerMock';
import gamesMock from '../../components/GameCardSlider/mock';

export default function Index() {
  const [home, setHome] = useState({
    banners: bannerMock,
    newGames: gamesMock,
  });

  return <Home banners={home.banners} newGames={home.newGames} />;
}
