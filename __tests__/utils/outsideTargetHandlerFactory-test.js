jest.dontMock('../../src/utils/outsideTargetHandlerFactory');

const outsideTargetHandlerFactory = require('../../src/utils/outsideTargetHandlerFactory');
const isDOMEquals = require('../../src/utils/isDOMEquals');


describe('outsideTargetHandlerFactory', () => {
  let targetNode, eventHandler, handler;

  beforeEach(() => {
    targetNode = document.createElement('div');
    eventHandler = jest.genMockFunction();
    handler = outsideTargetHandlerFactory(targetNode, eventHandler);
  });

  it('handler should call stopPropagation', () => {
    const event = {};
    event.target = { parentNode: null };
    event.stopPropagation = jest.genMockFunction();
    handler(event);
    expect(event.stopPropagation).toBeCalled();
  });

  it('eventHandler should be called when no parentNode', () => {
    const event = {};
    event.target = { parentNode: null };
    event.stopPropagation = () => {};
    handler(event);
    expect(eventHandler).toBeCalled();
  });

  it('eventHandler should not be called when isDOMEquals return true', () => {
    isDOMEquals.mockReturnValue(true);
    const event = {};
    event.target = { parentNode: document.createElement('div') };
    event.stopPropagation = () => {};
    handler(event);
    expect(eventHandler.mock.calls.length).toEqual(0);
  });

  it('eventHandler should not be called when isDOMEquals return false', () => {
    isDOMEquals.mockReturnValueOnce(false);
    const event = {};
    event.target = { parentNode: document.createElement('div') };
    event.stopPropagation = () => {};
    handler(event);
    expect(eventHandler).toBeCalled();
  });
});
