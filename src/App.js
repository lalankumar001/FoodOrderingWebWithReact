import React from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div>
      <Cart />
       <Header />
         <main>
          <Meals />
         </main>
    </div>
  );
}

export default App;
