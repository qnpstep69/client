import * as React from 'react'
import * as Sb from '../../../../../stories/storybook'
import TeamJourney from './index'

const commonProps = {
  teamname: "foo",
  conversationIDKey: "dummyConversationIDKey",
}

const load = () => {
  Sb.storiesOf('Chat/Conversation/Cards/Team Journey', module)
    .add('Welcome (small team)', () => (
      <TeamJourney
        {...commonProps}
        actions={[
          'wave',
          {label: 'Publish team on your profile', onClick: Sb.action('onPublishTeam')},
        ]}
        image="icon-illustration-welcome-96"
        text="Welcome to the team! Say hi to everyone and introduce yourself."
      />
    ))
    .add('Welcome (big team)', () => (
      <TeamJourney
        {...commonProps}
        actions={[
          {label: 'Publish team on your profile', onClick: Sb.action('onPublishTeam')},
          {label: 'Browse channels', onClick: Sb.action('onBrowseChannels')},
        ]}
        image="icon-illustration-welcome-96"
        text="Welcome to the team! Say hi to everyone and introduce yourself."
      />
    ))
    .add('Popular channels', () => (
      <TeamJourney
        {...commonProps}
        actions={[
          {label: '#one', onClick: Sb.action('onGoToChan')},
          {label: '#two', onClick: Sb.action('onGoToChan')},
          {label: '#three', onClick: Sb.action('onGoToChan')},
        ]}
        image={null}
        text={`You are in *#somechan*.
Some other channels in this team:`}
      />
    ))
    .add('Popular long channels', () => (
      <TeamJourney
        {...commonProps}
        actions={[
          {label: '#1234567890123456789', onClick: Sb.action('onGoToChan')},
          {label: '#2345678901234567890', onClick: Sb.action('onGoToChan')},
          {label: '#3456789012345678901', onClick: Sb.action('onGoToChan')},
        ]}
        image={null}
        text={`You are in *#somechan*.
Some other channels in this team:`}
      />
    ))
    .add('Popular no channels', () => (
      <TeamJourney
        {...commonProps}
        actions={[]}
        image={null}
        text={`You are in *#somechan*.
And you're in all the other channels, nice.`}
      />
    ))
    .add('Add people', () => (
      <TeamJourney
        {...commonProps}
        actions={[{label: 'Add people to the team', onClick: Sb.action('onAddPeopleToTeam')}]}
        image="icon-illustration-friends-96"
        text="Do you know people interested in joining? Foo is open to anyone."
      />
    ))
    .add('Create channels', () => (
      <TeamJourney
        {...commonProps}
        actions={[{label: 'Create chat channels', onClick: Sb.action('onCreateChatChannels')}]}
        image="icon-illustration-happy-chat-96"
        text="Go ahead and create *#channels* around topics you think are missing."
      />
    ))
    .add('Lots of attention', () => (
      <TeamJourney
        {...commonProps}
        actions={[]}
        image="icon-illustration-attention-64"
        text="One of your messages is getting lots of attention!"
      />
    ))
    .add('Inactive channel', () => (
      <TeamJourney
        {...commonProps}
        actions={[]}
        image="icon-illustration-sleepy-96"
        text="Zzz… This channel hasn’t been very active…. Revive it?"
      />
    ))
    .add('Message not answered', () => (
      <TeamJourney
        {...commonProps}
        actions={[
          {label: '#one', onClick: Sb.action('onGoToChan')},
          {label: '#two', onClick: Sb.action('onGoToChan')},
          {label: '#three', onClick: Sb.action('onGoToChan')},
        ]}
        image={null}
        text="People haven't been talkative in a while. Perhaps post in another channel?"
      />
    ))
}

export default load
