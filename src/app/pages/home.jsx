import React, { Component, PropTypes } from 'react';
import { DimPage, DimPropTypes, DimState, DimStyles } from './../../core';

import AppBar from 'material-ui/AppBar';

@DimPage({
  path: '/dimension'
})
@DimPropTypes({
  test: PropTypes.string.isRequired
})
@DimState(['test'])
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
    console.log(this.props.test);
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