/* 
  This decorator attaches attaches the supplied PropTypes to the decorated class
  ex: 
    @DimPropTypes({
      test: PropTypes.string.isRequired
    })
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
export function DimPropTypes(propTypes) {
  return function(target) {
    target.PropTypes = propTypes;
    return target;
  }
}