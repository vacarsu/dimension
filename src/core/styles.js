/* 
  This decorator attaches your styles to the class
  ex: 
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
*/
export function DimStyles(styles) {
  return function(target) {
    target.prototype.styles = styles;
    return target;
  }
}