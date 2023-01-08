import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Style from "./App.module.css";
import {dataBurger}from "../../utils/data"



function App() {
  return (
    <div>
      <AppHeader />
      <main className={Style.main}>
        <BurgerIngredients dataBurger={dataBurger}/>
        <BurgerConstructor dataBurger={dataBurger}/>
      </main>
    </div>
  );
}

export default App;
