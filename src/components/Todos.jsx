/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

function Todos(props) {
  
  const { todos, onDelete } = props

  const todoList = (
    <ul className="collection">      
      {
        todos.map((todo, i) => (
          <li key={i} className="collection-item">
            {todo.content + "   "} 
            <a href="#" className="red-text" onClick={() => onDelete(todo.id)}>delete</a>
          </li>
        ))
      }
    </ul>
  )

  return (
    <>
      <h1>Todos</h1>
      {todoList}   
    </>
  )
}

export default Todos
