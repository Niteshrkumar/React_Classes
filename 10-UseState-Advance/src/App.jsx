import React, { useState } from 'react'

const App = () => {

// const [num, setNum] = useState([10,20,30]);
// const btnClicked = () =>{
//   const newNum = [...num]
//   newNum.push(90)
//   setNum(newNum)
//   console.log(newNum)
// }

// const [num, setNum] = useState({user:'Nitesh',age:20})

// const btnClicked = () =>{
//   const newNum = {...num}
//   newNum.user = 'Aman'
//   setNum(newNum)
//   //console.log(newNum);
// }


const [num, setNum] = useState({user:'Nitesh',age:30})

const btnClicked = () =>{
  setNum(prev =>({...prev,age:28}))
}

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
