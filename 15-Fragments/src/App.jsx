import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './Components/FoodItems';
import ErrorMessage from './ErrorMessage';
import "./App.css";

const App = () => {
  let fooditems = ['Dal', 'Green & Leafy Vegetable', 'Roti', 'Salad', 'Milk'];

  return (
    <>
      <h1 className='food-heading'>Healthy Items</h1>
      <ErrorMessage items={fooditems} />
      <FoodItems items={fooditems} />
    </>
  )
}

export default App
