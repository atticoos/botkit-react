# botkit-react

```
npm install @babel/plugin-botkit-react
```

```js
import {Message, Section, Text} from 'botkit-react'

botkitController.on('message', (bot, message) => {
  bot.reply(
    message,
    <Message>
      <Section>
        <Text>Hello world</Text>
      </Section>
    </Message>
  )
})
```
