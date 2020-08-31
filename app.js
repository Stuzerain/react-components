var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList todos={['Apples', 'Eggs', 'Bread']} />
  </div>
);

// var Apples = (props) => (
//   <li>Apples</li>
// );

// var Eggs = (props) => (
//   <li>Eggs</li>
// );

var GroceryList = (props) => (
  <ul>{props.todos.map(todo =>
    <GroceryListItem todo={todo} />
  )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crossed: false,
      hovered: false
    };
  }

  onListItemClick() {
    this.setState({
      crossed: !this.state.crossed
    });
  }

  onListItemHover() {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
    var style = {
      textDecoration: this.state.crossed ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };
    return (
      <li
        style={style}
        onMouseEnter={this.onListItemHover.bind(this)}
        onMouseLeave={this.onListItemHover.bind(this)}
        onClick={this.onListItemClick.bind(this)}>
        {this.props.todo}
      </li>
    )
  }
};



ReactDOM.render(<App />, document.getElementById("app"));