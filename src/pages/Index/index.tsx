import React, { useState } from 'react';
import Home, { HomeTemplateProps } from '../../templates/Home';

import bannerMock from '../../components/Banner/bannerMock';
import gamesMock from '../../components/GameCardSlider/mock';
import highlightMock from '../../components/Highlight/mock';

export default function Index() {
  const [homeData, setHomeData] = useState({
    banners: bannerMock,
    newGames: gamesMock,
    mostPopularHighLight: highlightMock[0],
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighLights: highlightMock[1],
    upcommingMoreGames: gamesMock,
    freeGamesHighLight: highlightMock[2],
  });

  return <Home {...homeData} />;
}
