jest.dontMock('../src/SweetAlert');
jest.dontMock('sweetalert');
jest.dontMock('lodash.pick');

require('babel-core/polyfill')

const React = require('react');
const { render } = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const {
  renderIntoDocument,
  Simulate
} = TestUtils;

describe('SweetAlert', () => {
  let SweetAlert;
  beforeEach(() => {
    SweetAlert = require('../src/SweetAlert');
  });

  describe('propTypes', () => {
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
    });
  });


  describe('warning REMOVED_KEYS', () => {
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

  describe('should show prop works', () => {
    it('description', () => {
      const container = document.createElement('div');
      container.id = 'root';
      document.body.appendChild(container);
      render(
        <SweetAlert title="t" show={true} />,
        document.getElementById('root')
      );
      waitsFor(
        () => document.querySelector('.sweetalert'),
        'SweetAlert should be shown',
        3000
      );
    })
  })

  xit('should `onConfirm` works', () => {
    const callback = jest.genMockFunction();
    runs(() => {
      const container = document.createElement('div');
      container.id = 'root';
      document.body.appendChild(container);
      render(
        <SweetAlert title="t" show={true} onConfirm={callback} />,
        document.getElementById('root')
      );
    });

    waitsFor(() => {
      console.log(document
        .querySelector('.sweetalert .confirm'))
      return document
        .querySelector('.sweetalert .confirm')
    }, 'The Value should be incremented', 5000);

    runs(() => {
      document
        .querySelector('.sweetalert .confirm')
        .click();
      expect(cb).toBeCalled();
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

  describe('Outside click', () => {
    // body...
  });
});
