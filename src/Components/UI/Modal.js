import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import clasess from '../Cart/Cart.module.css'
import CartContext from "../../store/CartContext";



const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    const cartCtx = useContext(CartContext);

     console.log(cartCtx.items);
     const onRemoveItem =()=>{
            alert('are you sure?')
    }

  return (
    <div className={styles.modal}>
      <div className={styles.content}></div>
        {cartCtx.items.map(item => { return(  
        <div>
        <h1>{item.name} </h1>
        <h2>{item.description}</h2>
        <h3>{item.price}</h3>
        
        <button className={clasess['button--alt']} onClick={onRemoveItem}>-</button> 
        <button className={clasess['button--alt']} onClick={props.onClose}>+</button> 
     
            </div>
            
        )
         })}

      <div className={clasess.actions}>
        <button className={clasess['button--alt']} onClick={props.onClose}>Close</button> 
        <button className={clasess.button}>Order</button> 
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(<ModalOverlay  onClose={props.onClose}/>, portalElement)}
      {/* YOu can also call like below  */}
      {/* <Backdrop onClose={props.onClose} /> */}
      {/* <ModalOverlay /> */}
    </div>
  );
};

export default Modal;
