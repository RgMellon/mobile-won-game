import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { CardProps } from '../Card';

export const GameCardSlider = styled(FlatList as new () => FlatList<CardProps>)`
  /* width: 100%; */
`;
