import React from 'react'

let CurrentDateTime = () => {
    let time = Date();
    return (
        <div>
            <p>This is the Current Time is {time}</p>
        </div>
    )
}

export default CurrentDateTime
