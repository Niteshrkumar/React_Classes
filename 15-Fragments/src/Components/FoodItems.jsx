import React from 'react'
import Item from './Item'

const FoodItems = ({ items }) => {
    let fooditems = ['Dal', 'Green & Leafy Vegetable', 'Roti', 'Salad', 'Milk']
    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item key={item} fooditem={item} />
            ))}
        </ul>
    )
}

export default FoodItems
