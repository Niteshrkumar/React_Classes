import React from 'react'
import RightCardContent from './RightCardContent'

const Rightcard = (props) => {
  // console.log(props.color)
  return (
    <div id='Right' className='h-full w-75 shrink-0 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
