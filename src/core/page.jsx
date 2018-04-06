/* 
  This decorator attaches the route path to the decorated classes prototype
  ex: 
    @DimPage({
      path: 'string'
    })
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }

    THIS DECORATOR IS DEPRECATED
*/
export function DimPage(setup) {
  return function(target) {
    target.path = setup.path
    return target;
  }
}