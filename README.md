# Dimension Framework
**A framework for rapidly building Progressive Web Apps**

## This Framework is in an alpha state
**There is probably bugs and the API susceptible to change**

## Get Started
**NPM/Yarn install coming soon**

#### To create an app just do the following
```javascript

import { bootstrap, DimApp, DimPage, DimPropTypes, DimState } from 'dimension';
import { defaultTheme } from 'dimension';
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

// The HomePage of your app
@DimPage({
  path: '/'
})
@DimPropTypes({
  test: PropTypes.string.isRequired
})
@DimState(['test'])
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar
          style={{
            position: 'fixed',
            width: 'auto',
            height: '65px',
            marginLeft: this.props.marginLeft,
            right: '0px',
            left: '0px',
          }}
          title="Test"
        />
        Test
      </div>
    )
  }
}

// The App container
// setups up the react router for you
// with material-ui, react-intl, and redux
// also add a service worker for offline functionality
@DimApp({
  pages: [
    { component: HomePage, children: [] }
  ],
  config: {
    theme: defaultTheme,          // The material-ui theme just import the default one or create your own
    locale: 'en',
    serviceWorker: '/worker.js',
    state: {
      initialState: initialState, // the initial state of your redux store
      reducers: {                 // Provide reducers separately, the decorator will combine them for you
        test
      }
    }
  }
})
export default class App extends Component {
  constructor(props) {
    super(props);
  }
}
// render the app on the screen
bootstrap((<App />), document.getElementById('app'));

```

## Documentation
**Coming Soon**