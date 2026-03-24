import React from 'react'

const ErrorMessage = (items) => {
    // let fooditems = ['Dal', 'Green & Leafy Vegetable', 'Roti', 'Salad', 'Milk'];

    return (
        <>
            {items.length === 0 && <h1>I am Still Hungry!</h1>}
        </>
    )
}

export default ErrorMessage
