import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Style from "./App.module.css";
import React, { useEffect, useState } from "react";
import { getIngredients } from "../../utils/MainAPI";
import { burgerContext } from "../../contexts/burgerContext";
import { OrderContext } from "../../contexts/orderContext";

function App() {
  const [dataBurger, setDataBurger] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [orderDetails, setOrderDetails] = React.useState(null);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setDataBurger(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AppHeader />
      <main className={Style.main}>
        <burgerContext.Provider value={{ dataBurger, setDataBurger }}>
          <BurgerIngredients
            // dataBurger={dataBurger}
            setCurrentIngredient={setCurrentIngredient}
            currentIngredient={currentIngredient}
          />
          <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
            <BurgerConstructor
            // dataBurger={dataBurger}
            />
          </OrderContext.Provider>
        </burgerContext.Provider>
      </main>
    </div>
  );
}

export default App;
