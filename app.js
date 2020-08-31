var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList />
  </div>
);

// var TodoList = (props) => (

// );

var Apples = (props) => (
  <li>Apples</li>
);

var Eggs = (props) => (
  <li>Eggs</li>
);

var GroceryList = (props) => (
  <div>
    <ul>
      <Apples />
      <Eggs />
    </ul>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));