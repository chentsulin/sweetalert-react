import isDOMEquals from './isDOMEquals';

export default function outsideTargetHandlerFactory(targetNode, eventHandler) {
  return (evt) => {
    evt.stopPropagation();
    var current = evt.target;
    var found = false;
    while (current.parentNode) {
      found = isDOMEquals(current, targetNode);
      if (found) return;
      current = current.parentNode;
    }
    eventHandler(evt);
  };
}
