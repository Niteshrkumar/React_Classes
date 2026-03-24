import React from 'react'
import './Todo.css'
import AppName from './AppName'
import AppField from './AppField'
import Todoitems from './Todoitems'

const App = () => {
  const todoitems = [{
    ItemName: "Go to College",
    ItemDate: "15-03-2026"
  },
  {
    ItemName: "Buy Milk",
    ItemDate: "18-03-2026"
  }
    ,
  {
    ItemName: "Buy Curd",
    ItemDate: "22-03-2026"
  }]
  return (
    <center className="todo-container">
      <AppName />
      <div className="container">
        <AppField />
        <Todoitems todoitems={todoitems} />
      </div>
    </center>
  )
}

export default App
