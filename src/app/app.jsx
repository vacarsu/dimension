import React from 'react';
import { bootstrap } from './../';
import App from './app-main';


window.onload = () => {
  bootstrap((<App />), document.getElementById('app'));
}