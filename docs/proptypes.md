# DimPropTypes
### **Class Decorator**

Decorate a component with this function.

This is just a convenience decorator for using React.PropTypes. It just adds some syntactic sugar when adding your props to the component so you can keep them outside and above the class with the rest of you configuration.

object: ```{ prop: PropType }```

### simple example
``` javascript
import { DimPropTypes } from 'dimension';
import React, { Component, PropTypes } from 'react';

@DimPropTypes({
  prop1: PropTypes.object.isRequired,
  prop2: PropTypes.string.isRequired
})
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
}
```