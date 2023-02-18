import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import clasess from "../Cart/Cart.module.css";
import CartContext from "../../store/CartContext";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={styles.modal}>
      <div className={styles.content} />
      {cartCtx.items.length === 0 && <h1>Cart is empty</h1>}
      {cartCtx.items.length > 0 &&
        cartCtx.items.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name} </h1>
              <h2>{item.description}</h2>
              <h3>${item.price * item.quantity}</h3>
              <p>{item.quantity}</p>

              <button
                className={clasess["button--alt"]}
                onClick={() => {
                  cartCtx.removeItem(item.id);
                }}
              >
                -
              </button>
              <button
                className={clasess["button--alt"]}
                onClick={() => {
                  cartCtx.addItem({ ...item, quantity: 1 });
                }}
              >
                +
              </button>
            </div>
          );
        })}
      <div>{cartCtx.totalAmount}</div>
      <div className={clasess.actions}>
        <button className={clasess["button--alt"]} onClick={props.onClose}>
          Close
        </button>
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
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </div>
  );
};

export default Modal;
