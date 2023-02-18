import React from 'react'
import MealitemForum from './MealitemForum'
import styles from './MealsItem.module.css'

const MealsItem = (props) => {
    return (
        // available meal se data aa rha using props 
        <li className={styles.meal}>
            <div> <h3>{props.meal.name}</h3>
            <div className={styles.description}>{props.meal.description}</div>
            <div className={styles.price}>${props.meal.price}</div>
             </div>
{/* Meal item Form  */}
            <div>
            <MealitemForum meal={props.meal}/>
            </div>
        </li>
  )
}

export default MealsItem