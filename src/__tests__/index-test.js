import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';

import SweetAlert from '../';

it('should not break render', () => {
  const node = document.createElement('div');
  expect(() => {
    render(
      <SweetAlert title="client-rendering" />,
      node
    );
  }).not.toThrow();
});


it('should not break renderToString', () => {
  global.window = undefined;

  expect(() => renderToString(
    <SweetAlert title="server-rendering" />
  )).not.toThrow();
});
