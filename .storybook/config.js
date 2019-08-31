import React from 'react'
import { addParameters, addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'styled-components'
import backgroundColor from 'react-storybook-decorator-background'
import configureStore from '../src/redux/store/index'
import { Provider as ReduxProvider } from 'react-redux'

import { GlobalStyles } from '../src/app/app.styles'
import theme from '../src/components/theme/default'
import zoneDigitalTheme from './zoneDigitalStorybookTheme'

// create store to decorate stories
const store = configureStore()

addParameters({
  options: {
    theme: zoneDigitalTheme
  }
})

addDecorator(withInfo({
  inline: true
}))

addDecorator(withKnobs)

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(backgroundColor([ '#f9f9f9', '#b7b7b7' ]))
addDecorator(story => <div>
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      {story()}
    </ReduxProvider>
  </ThemeProvider>
  <GlobalStyles />
</div>)

configure(loadStories, module)
