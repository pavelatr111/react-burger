import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Style from "./App.module.css";
import React, { useEffect, useState } from "react";
import { OrderContext } from "../../contexts/orderContext";
import { useDispatch } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [orderDetails, setOrderDetails] = React.useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={Style.main}>
          <BurgerIngredients
            setCurrentIngredient={setCurrentIngredient}
            currentIngredient={currentIngredient}
          />
          <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
            <BurgerConstructor />
          </OrderContext.Provider>
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
