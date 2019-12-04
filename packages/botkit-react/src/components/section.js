export default function Section({children, accessory}) {
  return {
    type: 'section',
    text: children,
    accessory
  }
}
