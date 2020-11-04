import 'jest-styled-components';

import React from 'react';
import { renderWithTeme } from '../../test-utils';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the Heading', () => {
    const { getByRole, getByTestId, debug } = renderWithTeme(
      <Heading>Won Games</Heading>,
    );

    expect(getByRole('text').children[0]).toEqual('Won Games');
  });

  it('should render a white heading by default', () => {
    const { getByRole } = renderWithTeme(<Heading>Won Games</Heading>);

    const headingComponent = getByRole('text');

    expect(headingComponent.props.style[0].color).toEqual('#FAFAFA');
  });

  it('should render a white heading by default', () => {
    const { getByRole } = renderWithTeme(
      <Heading color="black">Won Games</Heading>,
    );

    const headingComponent = getByRole('text');

    expect(headingComponent.props.style[0].color).toEqual('#030517');
  });

  it('should render a white heading by default', () => {
    const { getByRole, getByTestId } = renderWithTeme(
      <Heading color="black" lineBottom>
        Won Games
      </Heading>,
    );

    const headingWithLineBottom = getByTestId('border-bottom');
    expect(headingWithLineBottom).toBeTruthy();

    expect(headingWithLineBottom.props.style[0].borderColor).toEqual('#3cd3c1');
  });
});
