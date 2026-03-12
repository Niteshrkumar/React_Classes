import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Testing another Method')
  }
  // const PageScroll = (elem) =>{
  //   // console.log('Page Scrolling right now !',elem)
  //   if (elem>0){
  //     console.log('Downward Scrolling')
  //   }
  //   else
  //     console.log('Upward Scrolling')
  // }
  return (
    <div>
      <button>Click</button>
    </div>
    // <div>
    //   <div onWheel = {(elem) =>{
    //       PageScroll(elem.deltaY)
    //   } } >   
    //     <div className='page1'></div>
    //     <div className='page2'></div>
    //     <div className='page3'></div>
    //   </div>
    //   {/* <div onMouseMove={(elem) => {
    //     console.log('elem.')

    //   }} className='box'>

    //   </div> */}
    // </div>
  )
}

export default App
