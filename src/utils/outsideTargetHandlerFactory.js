import isSourceFound from './isSourceFound';

export default function outsideTargetHandlerFactory(localNode, eventHandler) {
  return (evt) => {
    evt.stopPropagation();
    var source = evt.target;
    var found = false;
    while (source.parentNode) {
      found = isSourceFound(source, localNode);
      if (found) return;
      source = source.parentNode;
    }
    eventHandler(evt);
  };
}
