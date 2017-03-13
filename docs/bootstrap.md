# DimApp
### ** Function **

Convenience method for rendering an App Component. Runs Reacts render function internally.
Allows you to reduce import code as you can simply import bootstrap from dimension.

### simple example
``` javascript
import { bootstrap } from 'dimension';
import App from './app';

bootstrap((<App />), document.getElementById('app'));
```