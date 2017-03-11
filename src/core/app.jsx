import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { IntlProvider } from 'react-intl';
import { store } from './../state/store';

/*
  This decorator abstracts the react-router, redux setup, material-ui setup, and react-intl
  along with a service worker install, which saves potentially 100 lines (or more for large apps) of boiler plate code.

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
  const startWorker = (worker) => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register(worker).then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  }

  const mapChildren = (children) => {
    children.map((child) => (
      <Route key={child.prototype.path} path={child.prototype.path} component={child} />
    ))
  }

  const setupRoutes = () => {
    return setup.pages.map((page) => {
      if(page.children && page.children.length > 0) {
        return (
          <Route key={page.component.prototype.path} path={page.component.prototype.path} component={page.component}>
            {mapChildren(page.children)}
          </Route>
        )
      }
      else {
        return (
          <Route key={page.component.prototype.path} path={page.component.prototype.path} component={page.component} />
        )
      }
    })
  }

  const initializeRedux = () => {
    const combinedReducers = combineReducers(setup.config.state.reducers);
    return store(combinedReducers, setup.config.state.initialState);
  }

  return function(target) {
    if(setup.config.serviceWorker) startWorker(setup.config.serviceWorker);

    target.prototype.render = () => (
      <MuiThemeProvider muiTheme={getMuiTheme(setup.config.theme)}>
        <IntlProvider locale={setup.config.locale}>
          <Provider store={initializeRedux()}>
            <Router history={hashHistory}>
              {setupRoutes()}
            </Router>
          </Provider>
        </IntlProvider>
      </MuiThemeProvider>
    )
    return target;
  }
}