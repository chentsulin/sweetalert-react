import isDOMEquals from './isDOMEquals';

/**
 *
 * @param  {HTMLElement}  targetNode
 * @param  {HTMLElement}  eventHandler
 * @return {Boolean}
 */
export default function outsideTargetHandlerFactory(targetNode, eventHandler) {
  return evt => {
    evt.stopPropagation();
    let current = evt.target;
    let found = false;
    while (current.parentNode) {
      found = isDOMEquals(current, targetNode);
      if (found) return;
      current = current.parentNode;
    }
    eventHandler(evt);
  };
}
