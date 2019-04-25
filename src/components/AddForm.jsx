import React, { Component } from "react"

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    const name = e.target.name
    const value = e.target.type === "checkbox" ? true : e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onAddTodo(this.state.todo)
    this.setState({
      todo: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>Add New Todo</h5>
        <div className="input-field">
          <input className="validate" type="text" name="todo" value={this.state.todo} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default AddForm
