const { Component } = require("react");

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    //update nw item
    this.setState({
      [key]: value
    })
  }

  addItem(){
    // Create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // Copy of current list of items
    const list = [...this.state.list];

    // add new item
    list.push(newItem);

    // Update state with new list and newItem input
    this.setState({
      list,
      newItem:""
    })
  }

  deleteItem(id){
    // copy current
    const list = [...this.state.list];

    // filter out
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }


  render() {
    return(
      <div className="Container">
        <div>
          Add an item...
          <br/>
          <input 
            type="text"
            placeholder="Type in here items"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}> Add </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;