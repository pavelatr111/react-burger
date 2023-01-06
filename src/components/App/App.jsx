import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Style from './App.module.css'

function App() {
  return (
    <div>
      <AppHeader />
      <main className={Style.main}>
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
