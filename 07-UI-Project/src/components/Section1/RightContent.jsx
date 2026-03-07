import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'
const RightContent = (props) => {
  return (
    <div className='h-full rounded-4xl flex-nowrap gap-6 overflow-x-auto flex w-3/4  p-4'>
      {props.users.map(function(elem,idx){
        return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>

      })}
    </div>
  )
}

export default RightContent
