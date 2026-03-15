import React, { useState } from 'react'

const App = () => {

  // let a = 20;
  //const [num, setNum] = useState(10)

  // function ChangeValue(){
  //   setNum(30)
  //   // console.log(a);
  //   // a = 30
  //   // console.log(a);
  // }
  const [num, setNum] = useState(0)

  function IncreaseValue(){
    setNum(num+1)
  }

  function DecreaseValue(){
    setNum(num-1)
  }
  function JumpBy5(){
    setNum(num+5)
  }

  return (
    <div>
      <div>
        <h1> {num}</h1>
        <button onClick={IncreaseValue}>Increase</button>
        <button onClick={DecreaseValue}>Decrease</button>
        <button onClick={JumpBy5}>Jump By 5</button>
      </div>
    </div>
  )
}

export default App
