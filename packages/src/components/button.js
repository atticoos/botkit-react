export default function AButton ({id, value, style, emoji, children}) {
  return {
    type: 'button',
    text: children,
    action_id: id,
    value,
    style,
    emoji
  }
}
