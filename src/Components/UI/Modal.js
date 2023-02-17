import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = (props) =>{
    return (
        <div className={styles.backdrop} />
    )
};

const ModalOverlay = (props) =>{
    return (
        <div className={styles.modal} > 
        <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <div>
        {ReactDOM.createPortal (<Backdrop />,portalElement)}
        {ReactDOM.createPortal (<ModalOverlay />,portalElement)}
       {/* YOu can also call like below  */}
        {/* <Backdrop /> */}
        {/* <ModalOverlay /> */}
    </div>
  )
}

export default Modal