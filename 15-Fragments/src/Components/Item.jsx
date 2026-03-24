import React from 'react'
import styles from './Item.module.css';

const Item = ({ fooditem }) => {
    return (
        <>
            <li className={`${styles['custom-item']}`}>
                <span className={styles["custom-span"]}>
                    {fooditem}
                </span>
            </li >
        </>
    )
}

export default Item
