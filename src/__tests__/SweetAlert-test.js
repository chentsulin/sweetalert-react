/* eslint-disable no-console */

import React from 'react';
import { mount } from 'enzyme';
import swal from 'sweetalert2';

import SweetAlert from '../SweetAlert';

jest.mock('sweetalert');

let _error;

beforeEach(() => {
  _error = console.error;
  console.error = jest.fn();
});

afterEach(() => {
  console.error = _error;
  _error = null;
  swal.mockClear();
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
      /Failed prop type: The prop `title` is marked as required in `SweetAlert`/
    );
  });
});

describe('allow ALLOWS_KEYS as props', () => {
  it('should not log error when props pass down', () => {
    mount(
      <SweetAlert
        title="t"
        text="some text"
        type="warning"
        customClass="custom-class"
        showCancelButton
        showConfirmButton
        confirmButtonText="confirm"
        confirmButtonColor="green"
        cancelButtonText="cannel"
        imageUrl=""
        imageSize="160x160"
        html="some html"
        animation
        inputType="text"
        inputValue="default"
        inputPlaceholder="placeholder"
        showLoaderOnConfirm
      />
    );
    expect(console.error).not.toBeCalled();
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
  it('should call sweetalert when show is true', async () => {
    mount(
      <SweetAlert title="t" show />
    );
    expect(swal).toBeCalled();
  });

  it('should call sweetalert when show is false', async () => {
    mount(
      <SweetAlert title="t" />
    );
    expect(swal).not.toBeCalled();
  });
});

describe('`onConfirm`', () => {
  xit('should  works', () => {
    const callback = jest.fn();
    mount(
      <SweetAlert title="t" show onConfirm={callback} />
    );
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
