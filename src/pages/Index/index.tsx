import React, { useState } from 'react';
import Home, { HomeTemplateProps } from '../../templates/Home';

import bannerMock from '../../components/Banner/bannerMock';

export default function Index() {
  const [home, setHome] = useState({
    banners: bannerMock,
  });

  return <Home {...home} />;
}
