# DimState
### **Class Decorator**

Decorate a component with this function.

This decorator will inject the specified values from the state into the component.
It takes an array of strings, the strings represent the key on the state object you're requesting.

array: ```string```

### simple example
``` javascript
import { DimState } from 'dimension';
import React, { Component, PropTypes } from 'react';

@DimState(['test'])
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
}
```