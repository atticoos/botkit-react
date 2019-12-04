/** @jsx slackJsx */
import slackJsx from '../src/parser'
import {Message, Section, Text, Button} from '../src/components'

describe('render', () => {
  it('should work', () => {
    const mockUser = {
      name: 'Atticus White'
    };

    const mockSetting = {slug: 'seat-labels-feature', name: 'Seat Labels', value: true};

    const FeatureFlagMessage = ({user, setting}) => (
      <Message responseType="in_channel">
        <Section>
          <Text>Hello, {user.name}</Text>
        </Section>

        <Section
          accessory={
            <Button
              id={`${setting.value ? 'disable' : 'enable'}-feature-flag`}
              value={setting.slug}
              style={setting.value ? 'danger' : 'primary'}
            >
              <Text>{setting.value ? 'Disable' : 'Enable'}</Text>
            </Button>
          }
        >
          <Text>Feature Flag: {setting.name}</Text>
        </Section>

      </Message>
    )

    const expected = {
      response_type: 'in_channel',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'Hello, Atticus White'
          },
          accessory: undefined
        },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'Feature Flag: Seat Labels'
          },
          accessory: {
            type: 'button',
            action_id: 'disable-feature-flag',
            value: 'seat-labels-feature',
            style: 'danger',
            emoji: undefined,
            text: {
              type: 'plain_text',
              text: 'Disable'
            }
          }
        }
      ]
    }

    const mounted = (
      <FeatureFlagMessage
        user={mockUser}
        setting={mockSetting}
      />
    )

    expect(mounted).toMatchObject(expected);
  })
})
