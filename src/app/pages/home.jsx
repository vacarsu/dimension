import React, { Component, PropTypes } from 'react';
import { DimPage } from './../../core/page';
import { DimPropTypes } from './../../core/proptypes';
import { DimState } from './../../core/state';

import AppBar from 'material-ui/AppBar';

@DimPage({
  path: '/dimension'
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