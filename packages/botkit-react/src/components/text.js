export default function Text ({children, type = 'plain_text'}) {
  return {
    type,
    text: Array.isArray(children) ? children.join('') : children
  };
}
