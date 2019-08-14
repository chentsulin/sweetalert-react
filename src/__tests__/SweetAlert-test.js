/* eslint-disable no-console */

import React from 'react';
import { mount } from 'enzyme';
import swal from 'sweetalert2';

import SweetAlert from '../SweetAlert';

let _error;

jest.mock('sweetalert2');

beforeEach(() => {
  swal.mockClear();
  _error = console.error;
  console.error = jest.fn();
});

afterEach(() => {
  console.error = _error;
  _error = null;
});

describe('propTypes', () => {
  it('should warn when title is not passed down to props', () => {
    mount(<SweetAlert />);

    expect(console.error).toBeCalledWith(
      "Warning: Failed prop type: The prop `title` is marked as required in `SweetAlert`, but its value is `undefined`.\n" +
      "    in SweetAlert"
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

describe('warn for REMOVED_KEYS', () => {
  it('should warn when REMOVED_KEYS:timer is passed down to props', () => {
    mount(<SweetAlert title="t" timer={60} />);
    expect(console.error).toBeCalledWith(
      'Warning: `timer` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warn when REMOVED_KEYS:closeOnConfirm is passed down to props', () => {
    mount(<SweetAlert title="t" closeOnConfirm />);
    expect(console.error).toBeCalledWith(
      'Warning: `closeOnConfirm` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warn when REMOVED_KEYS:closeOnCancel is passed down to props', () => {
    mount(<SweetAlert title="t" closeOnCancel />);
    expect(console.error).toBeCalledWith(
      'Warning: `closeOnCancel` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warn when REMOVED_KEYS:allowOutsideClick is passed down to props', () => {
    mount(<SweetAlert title="t" allowOutsideClick />);
    expect(console.error).toBeCalledWith(
      'Warning: `allowOutsideClick` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warn when REMOVED_KEYS:allowEscapeKey is passed down to props', () => {
    mount(<SweetAlert title="t" allowEscapeKey />);
    expect(console.error).toBeCalledWith(
      'Warning: `allowEscapeKey` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });
});

describe('display modal by props', () => {
  it('shouldn\'t call sweetalert when "show" prop is false', () => {
    mount(
      <SweetAlert title="t" show={false} />
    );

    expect(swal.fire).not.toBeCalled();
  });

  it('should call sweetalert when show is true', () => {

    mount(
      <SweetAlert title="t" show />
    );

    expect(swal.fire).toBeCalled();
  });
});

describe('callback onConfirm', () => {
  it('should be a function', () => {
    const callback = jest.fn();
    const s = mount(
      <SweetAlert title="t" show={true} onConfirm={callback} />
    );

    expect(s.prop('onConfirm')).toEqual(callback)
  });
});

describe('callback onCancel', () => {
  it('should be a function', () => {
    const callback = jest.fn();
    const s = mount(
      <SweetAlert title="t" show={true} onCancel={callback} />
    );

    expect(s.prop('onCancel')).toEqual(callback)
  });
});
