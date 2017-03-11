import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export function bootstrap(component, element) {
  render(component, element);
}