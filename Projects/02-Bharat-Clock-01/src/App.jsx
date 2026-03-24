import React from 'react'
import Clockheading from './Components/Clockheading'
import ClockTitle from './Components/ClockTitle'
import "bootstrap/dist/css/bootstrap.min.css"
import CurrentDateTime from './Components/CurrentDateTime'
const App = () => {

  return (
    <center>
      <Clockheading />
      <ClockTitle />
      <CurrentDateTime />
    </center>
  )
}

export default App
