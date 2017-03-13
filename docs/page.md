# DimPage
### **Class Decorator**

Decorate a page component with this function.
Requires an object with a path.
It will attach the path to the class prototype, and be used when added to DimApp on the main app component.

for paths with parameters simply add '/:parameter' where the parameter appears.

object: ```{ path: string }```

### simple example
``` javascript
import { DimPage } from 'dimension';
import React, { Component, PropTypes } from 'react';

@DimPage({
  path: '/home'
})
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
}
```

### example with parameters
``` javascript
import { DimPage } from 'dimension';
import React, { Component, PropTypes } from 'react';

@DimPage({
  path: '/parameters/:parameter'
})
export default class ParametersPage extends Component {
  constructor(props) {
    super(props);
  }
}
```