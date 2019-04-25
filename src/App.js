import React, { Component } from "react"
import Todos from "./components/Todos"
import AddForm from "./components/AddForm"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, content: "Buy some milk" },
        { id: 2, content: "Play Mario Kart" }
      ]
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleDelete(todoId) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== todoId)
    })
  }

  handleAddTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, { id: 666, content: newTodo }]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        
          <div className="row">

            <div className="col s12 m10 offset-m1">
              <Todos todos={this.state.todos} onDelete={this.handleDelete} />          
            </div>
            
            <div className="col s12 m10 offset-m1">
              <AddForm onAddTodo={this.handleAddTodo} />          
            </div>

          </div>        
        
        </div>
      </div>
    )
  }
}

export default App;
