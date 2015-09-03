var IGNORE_CLASS = 'ignore-react-onclickoutside';


export default function isSourceFound(source, localNode) {
  if (source === localNode) {
    return true;
  }
  // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
  if (source.correspondingElement) {
    return source.correspondingElement.classList.contains(IGNORE_CLASS);
  }
  return source.classList.contains(IGNORE_CLASS);
}
