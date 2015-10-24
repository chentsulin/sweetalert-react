jest.dontMock('../src/SweetAlert');

const SweetAlert = require('../src/SweetAlert');

describe('SweetAlert', () => {
  it('should return error when imageSize invalid', () => {
    expect(SweetAlert.propTypes.imageSize({ imageSize: '8080' }, 'imageSize'))
    .toEqual(jasmine.any(Error));
  });

  it('should not return error when imageSize valid', () => {
    expect(SweetAlert.propTypes.imageSize({ imageSize: '80x80' }, 'imageSize'))
    .not.toEqual(jasmine.any(Error));
  });
});
