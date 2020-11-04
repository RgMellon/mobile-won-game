import React from 'react';
import theme from '../../styles/theme';

import Button from '.';
import { renderWithTeme } from '../../test-utils';

describe('<Button />', () => {
  it('should render the button', () => {
    const { getByTestId, getByRole } = renderWithTeme(<Button>Buy now</Button>);
    const button = getByTestId('button');
    expect(button.props.style[0].backgroundColor).toEqual(theme.colors.primary);

    const labelButton = getByRole('text');
    expect(labelButton.children[0]).toEqual('Buy now');
    expect(labelButton.props.style[0].color).toEqual('#EAEAEA');
  });
});
