import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic for calculate
  const calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight/height");
    } else {
      let bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 25) {
        setMessage('You Are Underweight!');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You Are Healthy!');
      } else {
        setMessage('You Are Overweight!');
      }
    }
  }

  // Reload Logic
  // const reload = () => {
  //   window.location.reload();
  // }
  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setMessage('');
  }

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>

          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder='Enter Weight value'
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder='Enter Height value'
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='button' onClick={reload}>Reset</button>
          </div>

          <div className='center'>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App;