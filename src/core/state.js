import { connect } from 'react-redux';
/* 
  This decorator creates a redux container which supplies the state keys which were asked for
  ex: 
    @DimState([
      'test'
    ])
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
export function DimState(stateKeys) {
  const select = (state) => {
    let stateMap = {};
    stateKeys.forEach(key => {
      stateMap = Object.assign({}, stateMap, { [key]: state[key] });
      // stateMap[key] = state[key]
    });
    return stateMap;
  }
  return function(target) {
    return connect(select)(target);
  }
}