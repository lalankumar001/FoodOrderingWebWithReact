import React from "react";
import mealsImg from "../../assets/meals.jpg";
import CartBtn from "./HeaderCartBtn";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Delicious Food</h1>
        <h3>
          <CartBtn onClick={props.onShowCart} />
        </h3>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="Img of meals on the table" />
      </div>
    </div>
  );
};

export default Header;
