# DimStyles
### **Class Decorator**

Decorate a component with this function.

This is just a convenience decorator for using adding styles to your component. It adds some syntactic sugar when adding your styles to the component so you can keep them outside and above the class with the rest of your configuration. You can use you styles like so: ```<div styles={this.styles.divStyles}></div>```

object: ```{ styles }```

### simple example
``` javascript
import { DimStyles } from 'dimension';
import React, { Component, PropTypes } from 'react';

@DimStyles({
  divStyles: {
    width: '100%'
  }
})
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.styles.divStyles}></div>
    )
  }
}
```