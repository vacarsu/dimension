# DimApp
### **Class Decorator**

Decorate the app component with this function.
Requires a setup object with the below structure.
It will attach a render function to the class, which will render the MuiThemeProvider, IntlProvider, redux Provider, and React Router based on the pages supplied.

Setup: ```{ pages: array<object>, config: object }```
Setup.config: ```{ theme: object, locale: string, serviceWorker: string, state: object }```
Setup.config.state: ```{ store?: reduxStore, initialState?: object, reducers: object }```

if you want to manage the redux store yourself only supply the store value.
leave the store value off and only provide value for the initialState, and reducers
if you want Dimension to build the store for you.

### example setup object
``` javascript
{
  pages: [
    { component: PageComponent },
    { component: Page2Component, children: [ChildComponent] }
  ],
  config: {
    theme: defaultTheme,
    locale: 'en',
    serviceWorker: '/worker.js',
    state: {
      initialState: initialState,
      reducers: {
        test
      }
    }
  }
}
```

### full example
``` javascript
import { defaultTheme, DimApp } from 'dimension';
import React, { Component, PropTypes } from 'react';
import { initialState } from './state/initial-state';
import { test } from './state/test-reducer';

import PageComponent from './pages/PageComponent';
import Page2Component from './pages/Page2Component';
import ChildComponent from './pages/ChildComponent';

@DimApp({
  pages: [
    { component: PageComponent },
    { component: Page2Component, children: [ChildComponent] }
  ],
  config: {
    theme: defaultTheme,
    locale: 'en',
    serviceWorker: '/worker.js',
    state: {
      initialState: initialState,
      reducers: {
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
```