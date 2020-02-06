import { withConsole } from '@storybook/addon-console'
import { addDecorator, configure } from '@storybook/react'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

function loadStories() {
  require('../stories/Components.stories')
}

configure(loadStories, module)
