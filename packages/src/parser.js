export default function parser(element, props, ...children) {
  console.log('[parser]', {element, props, children})
  if (children.length === 1) {
    children = children[0]
  }

  if (typeof element === 'function') {
    return element({...props, children})
  }
  return element
}
