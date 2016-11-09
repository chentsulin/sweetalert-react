import isDOMEquals from '../isDOMEquals';

describe('isDOMEquals', () => {
  it('should be true if dom equals', () => {
    const div = document.createElement('div');
    expect(isDOMEquals(div, div)).toEqual(true);
  });

  it('should be false if dom does not equal', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    expect(isDOMEquals(div1, div2)).toEqual(false);
  });
});
