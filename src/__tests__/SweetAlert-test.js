/* eslint-disable no-console */

import React from 'react';
import { mount } from 'enzyme';
import sweetalert from 'sweetalert';

import SweetAlert from '../SweetAlert';

let _error;

beforeEach(() => {
  _error = console.error;
  console.error = jest.fn();
});

afterEach(() => {
  console.error = _error;
  _error = null;
});

describe('propTypes', () => {
  it('should return error when imageSize invalid', () => {
    expect(SweetAlert.propTypes.imageSize({ imageSize: '8080' }, 'imageSize'))
      .toBeInstanceOf(Error);
  });

  it('should not return error when imageSize valid', () => {
    expect(SweetAlert.propTypes.imageSize({ imageSize: '80x80' }, 'imageSize'))
      .not.toBeInstanceOf(Error);
  });

  it('should warning when title is not passed down to props', () => {
    mount(<SweetAlert />);
    const message = console.error.mock.calls[0][0];
    expect(message).toMatch(
      /Required prop `title` was not specified in `SweetAlert`/
    );
  });
});


describe('warning REMOVED_KEYS', () => {
  it('should warning when REMOVED_KEYS:timer is passed down to props', () => {
    mount(<SweetAlert title="t" timer={60} />);
    expect(console.error).toBeCalledWith(
      'Warning: `timer` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:timer is passed down to props', () => {
    mount(<SweetAlert title="t" timer={60} />);
    expect(console.error).toBeCalledWith(
      'Warning: `timer` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:closeOnConfirm is passed down to props', () => {
    mount(<SweetAlert title="t" closeOnConfirm />);
    expect(console.error).toBeCalledWith(
      'Warning: `closeOnConfirm` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:closeOnCancel is passed down to props', () => {
    mount(<SweetAlert title="t" closeOnCancel />);
    expect(console.error).toBeCalledWith(
      'Warning: `closeOnCancel` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:allowOutsideClick is passed down to props', () => {
    mount(<SweetAlert title="t" allowOutsideClick />);
    expect(console.error).toBeCalledWith(
      'Warning: `allowOutsideClick` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:allowEscapeKey is passed down to props', () => {
    mount(<SweetAlert title="t" allowEscapeKey />);
    expect(console.error).toBeCalledWith(
      'Warning: `allowEscapeKey` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });
});

describe('should show prop works', () => {
  xit('description', async () => {
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
    mount(
      <SweetAlert title="t" show />,
      document.getElementById('root')
    );
    expect(sweetalert).toBeCalled();
  });
});

xit('should `onConfirm` works', () => {
  const callback = jest.genMockFunction();
  runs(() => {
    const container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
    mount(
      <SweetAlert title="t" show onConfirm={callback} />,
      document.getElementById('root')
    );
  });

  waitsFor(
    () => document.querySelector('.sweetalert .confirm'),
    'The Value should be incremented',
    5000
  );

  runs(() => {
    document
      .querySelector('.sweetalert .confirm')
      .click();
    expect(() => {}).toBeCalled();
  });
});

describe('Cancel', () => {
  // body...
});

describe('Outside click', () => {
  // body...
});

describe('ESC', () => {
  // body...
});
