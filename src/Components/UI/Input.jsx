import React from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.Input}>{props.label}</label>
      <input {...props.input} />
      {/* spread operatior for taking input  */}
    </div>
  );
};

export default Input;
