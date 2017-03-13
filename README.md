# Dimension Framework
**A framework for rapidly building Progressive Web Apps**

## This Framework is in an alpha state
**There is probably bugs and the API is susceptible to change**

## Get Started
**NPM**
```
npm install dimension --save
```
**Yarn**
```
yarn add dimension
```

#### To create an app just do the following
```javascript

import React, { Component, PropTypes } from 'react';
import { bootstrap, defaultTheme, DimApp, DimPage, DimPropTypes, DimState } from 'dimension';
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
    console.log(this.props.test);
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
          title={this.props.test}
        />
      </div>
    )
  }
}

// The App container
// sets up the react router for you
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
      /*store: reduxStore
      if you want to manage the redux store yourself, add the store directly
      without initialState and reducers*/
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
// render the app on the screen or use react render directly.
bootstrap((<App />), document.getElementById('app'));

```

## Documentation
**Coming Soon**

### MIT Licence
Copyright 2017 AccessIPD, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.