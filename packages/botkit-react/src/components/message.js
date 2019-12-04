export default function Message ({children, responseType}) {
  return {
    response_type: responseType,
    blocks: Array.isArray(children) ? children : [children]
  };
}
