import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

/* 
  This decorator attaches the route path to the decorated classes prototype
  ex: 
    @DimPage({
      path: 'string'
    })
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
export function DimPage(setup) {
  return function(target) {
    target.prototype.path = setup.path
    return target;
  }
}