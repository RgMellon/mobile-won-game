import React from 'react';
import { renderWithTeme } from '../../test-utils';
import TextContent from '.';

const props = {
  title: 'description',
  content: '<h1> Content </h1>',
};

describe('<TextContent/>', () => {
  it('should render the title and content', () => {
    const { getByText } = renderWithTeme(<TextContent {...props} />);

    expect(getByText(/description/i)).toBeTruthy();
    expect(getByText(/Content/i)).toBeTruthy();
  });

  it('should render without title ', () => {
    const { queryByText } = renderWithTeme(
      <TextContent content={props.content} />,
    );

    expect(queryByText(/description/i)).not.toBeTruthy();
  });
});
