import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import Input from "../../UI/Input";
import styles from "./MealitemForum.module.css";

const MealitemForum = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddItem =(event)=>{
   event.preventDefault();
    cartCtx.addItem(props.meal);
  }
  return (
    <div>
      <form className={styles.form}>
        {/* input yaha input component se aa raha h jo ki ui file m h */}
        <Input
          label="Amount"
          input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button onClick={onAddItem}>+ Add</button>
      </form>
    </div>
  );
};

export default MealitemForum;
