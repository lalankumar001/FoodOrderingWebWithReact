import React from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";


function App() {
  return (
    <div>
       <Header />
         <main>
          <Meals />
         </main>
    </div>
  );
}

export default App;
