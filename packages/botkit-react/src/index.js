/** @jsx slackJsx */

import slackJsx from './parser'

function MyComponent () {
  return (
    <Button foo="bar" />
  )
}

function Button () {
  return <div></div>
}

const foo = (
  <MyComponent />
)

console.log('foo', foo)
