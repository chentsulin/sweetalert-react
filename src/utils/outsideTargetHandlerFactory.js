import isSourceFound from './isSourceFound';

export default function outsideTargetHandlerFactory(localNode, eventHandler) {
  return (evt) => {
    var source = evt.target;
    var found = false;
    // If source=local then this event came from "somewhere"
    // inside and should be ignored. We could handle this with
    // a layered approach, too, but that requires going back to
    // thinking in terms of Dom node nesting, running counter
    // to React's "you shouldn't care about the DOM" philosophy.
    while (source.parentNode) {
      found = isSourceFound(source, localNode);
      if (found) return;
      source = source.parentNode;
    }
    eventHandler(evt);
  };
}
