import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='h-10 w-10 text-xl font-semibold bg-white rounded-full flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-shadow-2xs text-lg leading-tight text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta quis, accusantium ex odit laudantium?</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='px-7 py-3 text-white font-medium rounded-full'>{props.tag}</button>
            <button className='px-4 py-3 text-white font-medium rounded-full'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
    </div>
  )
}

export default RightCardContent
