import React from 'react'
import MealitemForum from './MealitemForum'
import styles from './MealsItem.module.css'

const MealsItem = (props) => {
    return (
        // available meal se data aa rha using props 
        <li className={styles.meal}>
            <div> <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>${props.price}</div>
             </div>
{/* Meal item Form  */}
            <div>
            <MealitemForum />
            </div>
        </li>
  )
}

export default MealsItem