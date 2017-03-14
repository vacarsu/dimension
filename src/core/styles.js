/* 
  This decorator attaches your styles to the class
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
export function DimStyles(styles) {
  return function(target) {
    target.styles = styles;
    return target;
  }
}