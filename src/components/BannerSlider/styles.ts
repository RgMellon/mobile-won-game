import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { BannerProps } from '../Banner';

export const BannerSlide = styled(FlatList as new () => FlatList<BannerProps>)`
  width: 100%;
`;
