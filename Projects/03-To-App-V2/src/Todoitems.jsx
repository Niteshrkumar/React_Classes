import React from 'react'
import ToDoItem from './ToDoItem'
import styles from './Todoitems.module.css'

const Todoitems = ({ todoitems }) => {
    return (
        <div className={styles.ItemList}>
            {todoitems.map(item =>
                <ToDoItem ItemName={item.ItemName} ItemDate={item.ItemDate} />
            )}
        </div>
    )
}

export default Todoitems
