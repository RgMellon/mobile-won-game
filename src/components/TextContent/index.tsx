import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HTMLView from 'react-native-htmlview';

import theme from '../../styles/theme';
import Heading from '../Heading';

export type TextContentProps = {
  title?: string;
  content: string;
};

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <>
      {!!title && <Heading>{title}</Heading>}
      <HTMLView value={content} stylesheet={styles} />
    </>
  );
};

export default TextContent;

const styles = StyleSheet.create({
  div: {
    color: '#fff',
    textAlign: 'left',
  },

  img: {},

  h2: {
    color: '#fff',
    margin: 16,
  },

  h1: {
    color: '#fff',
    margin: 16,
  },

  h3: {
    color: '#fff',
    margin: 16,
  },

  h4: {
    color: '#fff',
    margin: 16,
  },
  h5: {
    color: '#fff',
    margin: 16,
  },
  h6: {
    color: '#fff',
    margin: 16,
  },

  p: {
    color: '#fff',
  },

  a: {
    color: theme.colors.primary,
  },

  ul: {
    paddingTop: theme.spacings.small,
  },
});
