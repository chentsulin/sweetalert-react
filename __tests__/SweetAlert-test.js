jest.dontMock('../src/SweetAlert');

const SweetAlert = require('../src/SweetAlert');
const TestUtils = require('react-addons-test-utils');
const React = require('react');

const {
  renderIntoDocument
} = TestUtils;

describe('SweetAlert', () => {
  it('should return error when imageSize invalid', () => {
    expect(SweetAlert.propTypes.imageSize({ imageSize: '8080' }, 'imageSize'))
    .toEqual(jasmine.any(Error));
  });

  it('should not return error when imageSize valid', () => {
    expect(SweetAlert.propTypes.imageSize({ imageSize: '80x80' }, 'imageSize'))
    .not.toEqual(jasmine.any(Error));
  });

  it('should warning when title is not passed down to props', () => {
    spyOn(console, 'error');
    renderIntoDocument(<SweetAlert />);
    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: Failed propType: ' +
      'Required prop `title` was not specified in `SweetAlert`.'
    );
  })

  it('should warning when REMOVED_KEYS:timer is passed down to props', () => {
    spyOn(console, 'error');
    renderIntoDocument(<SweetAlert title="t" timer={60} />);
    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: `timer` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:timer is passed down to props', () => {
    spyOn(console, 'error');
    renderIntoDocument(<SweetAlert title="t" timer={60} />);
    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: `timer` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:closeOnConfirm is passed down to props', () => {
    spyOn(console, 'error');
    renderIntoDocument(<SweetAlert title="t" closeOnConfirm />);
    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: `closeOnConfirm` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:closeOnCancel is passed down to props', () => {
    spyOn(console, 'error');
    renderIntoDocument(<SweetAlert title="t" closeOnCancel />);
    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: `closeOnCancel` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:allowOutsideClick is passed down to props', () => {
    spyOn(console, 'error');
    renderIntoDocument(<SweetAlert title="t" allowOutsideClick />);
    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: `allowOutsideClick` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });

  it('should warning when REMOVED_KEYS:allowEscapeKey is passed down to props', () => {
    spyOn(console, 'error');
    renderIntoDocument(<SweetAlert title="t" allowEscapeKey />);
    expect(console.error.argsForCall.length).toBe(1);
    expect(console.error.argsForCall[0][0]).toBe(
      'Warning: `allowEscapeKey` has been removed from sweetalert-react, ' +
      'pass `show` props and use event hook instead.'
    );
  });
});
