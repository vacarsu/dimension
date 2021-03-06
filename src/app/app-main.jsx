import { DimApp } from './../';
import React, { Component, PropTypes } from 'react';
import { defaultTheme } from './../theme';
import { initialState } from './state/initial-state';
import { test } from './state/test-reducer';

import HomePage from './pages/home';

@DimApp({
  pages: [
    { path: '/', component: HomePage, children: [] }
  ],
  config: {
    theme: defaultTheme,
    locale: 'en',
    // serviceWorker: '/dimension/worker.js',
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