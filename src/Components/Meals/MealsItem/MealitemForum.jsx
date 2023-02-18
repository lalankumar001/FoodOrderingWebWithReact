import React, { useContext, useState } from "react";
import CartContext from "../../../store/CartContext";
import Input from "../../UI/Input";
import styles from "./MealitemForum.module.css";

const MealitemForum = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      ...props.meal,
      quantity: Number(event.target.quantity.value),
    });
  };

  return (
    <div>
      <form onSubmit={addItemHandler} className={styles.form}>
        {/* input yaha input component se aa raha h jo ki ui file m h */}
        <Input
          label="quantity"
          input={{
            name: "quantity",
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default MealitemForum;
