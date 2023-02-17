import React from 'react'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = (props) => {
  const cartItems =(
<ul className={styles['cart-items']}>
  {[{id:'c1',name:'pizza' , amount:2 , price:12.9}].map((item) =>{
    <li>{item.name}</li>
  })}
</ul>
  )
  return (
    // modal is a component 
    <Modal>
      {cartItems}
      <div className={styles.actions}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button> 
        <button className={styles.button}>Order</button> 
      </div>
    </Modal>
  )
}

export default Cart