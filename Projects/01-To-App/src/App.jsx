import React from 'react'
import ToDoItem1 from './ToDoItem1'
import ToDoItem2 from './ToDoItem2'
import './Todo.css'
import AppName from './AppName'
import AppField from './AppField'

const App = () => {
  return (
    <center className="todo-container">
      <AppName />
      <div className="container">
        <AppField />
        <div className="ItemList">
          <ToDoItem1 />
          <ToDoItem2 />
        </div>
      </div>
    </center>
  )
}

export default App
