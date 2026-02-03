import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='Parent'>
      
      <Card user='Nitesh' age={32} img='https://plus.unsplash.com/premium_photo-1755534835660-d1a16e62c6f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Tejaswi' age={29} img='https://images.unsplash.com/photo-1769614923544-1a147f778ea6?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App
