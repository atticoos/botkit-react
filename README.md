# botkit-react

```jsx
const FeatureFlagMessage = ({user, settings}) => (
  <Message>
    <Section
      title={<Text type="mkdwn">{`Flag summary for ${user.name}`}</Text>}
    />
    <Divider />
    {settings.map(setting => <FeatureFlagRow setting={setting} />)}
  </Message>
)

const FeatureFlagRow = ({setting}) => {
  return (
    <Section
      title={<Text type="mkdwn">{setting.name}</Text>}
      accessory={
        <Button
          action_id={setting.slug}
          value={setting.value}
          style={setting.value ? 'danger' : 'primary'}
        />
      }
    />
  )
}

<FeatureFlagMessage
  user={{name: 'Atticus'}}
  settings={[{slug: 'seat-labels', value: true}]}
/>
// → outputs {blocks} data structure
```
