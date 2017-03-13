import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { IntlProvider } from 'react-intl';
import { startWorker, setupRoutes, initializeRedux } from './../lib';
import { store } from './../state/store';

/*
  This decorator abstracts the react-router, redux setup, material-ui setup, and react-intl
  along with a service worker install.

  It will map the pages and build a react router from them.

  If a service worker is provided it will run the install process for that service worker.

  After setup it will attach the react render function to the decorated class.

  ex: 
    @DimApp({
      pages: [
        List page components
      ],
      config: {
        theme: defaultTheme,
        locale: 'en',
        serviceWorker: '/worker.js'
      }
    })
    class App extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
export function DimApp(setup) {
  return function(target) {
    if(setup.config.serviceWorker) startWorker(setup.config.serviceWorker);

    target.prototype.render = () => (
      <MuiThemeProvider muiTheme={getMuiTheme(setup.config.theme)}>
        <IntlProvider locale={setup.config.locale}>
          <Provider
            store={setup.config.state.store ?
            setup.config.state.store
            :
            initializeRedux(setup.config.state.reducers, setup.config.state.initialState)}
          >
            <Router history={hashHistory}>
              {setupRoutes(setup.pages)}
            </Router>
          </Provider>
        </IntlProvider>
      </MuiThemeProvider>
    )
    return target;
  }
}