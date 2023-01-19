import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Style from "./App.module.css";
import React, { useEffect, useState } from "react";
import { getIngredients } from "../../utils/MainAPI";

function App() {
  const [dataBurger, setDataBurger] = useState([])
  const [currentIngredient, setCurrentIngredient] = useState(null);
  


useEffect(() => {
   getIngredients()
    .then(data => {
      setDataBurger(data.data)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])


  return (
    <div>
      <AppHeader />
      <main className={Style.main}>
        <BurgerIngredients
          dataBurger={dataBurger}
          setCurrentIngredient={setCurrentIngredient}
          currentIngredient={currentIngredient}
        />
        <BurgerConstructor
          dataBurger={dataBurger}
        />
      </main>
    </div>
  );
}

export default App;
