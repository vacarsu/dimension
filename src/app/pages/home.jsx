import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { DimPage, DimPropTypes, DimState, DimStyles } from './../../core';

import AppBar from 'material-ui/AppBar';

@DimState(['test'])
@DimPropTypes({
  test: PropTypes.string.isRequired
})
@DimStyles({
  appbar: {
    position: 'fixed',
    width: 'auto',
    height: '65px',
    right: '0px',
    left: '0px'
  }
})
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppBar
          style={this.styles.appbar}
          title={this.props.test}
        />
      </div>
    )
  }
}