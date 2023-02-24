import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Style from "./App.module.css";
import React, { useEffect, useState } from "react";
// import { getIngredients } from "../../utils/MainAPI";
import { burgerContext } from "../../contexts/burgerContext";
import { OrderContext } from "../../contexts/orderContext";
import { useDispatch, useSelector } from "react-redux";
import { ingredientsReducer } from "../../services/reducers/burgerIngredients";
import { getBurgerIngredients } from "../../services/actions/burgerIngredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  // const [dataBurger, setDataBurger] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [orderDetails, setOrderDetails] = React.useState(null);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getIngredients()
  //     .then((data) => {
  //       setDataBurger(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
      useEffect(() => {
        dispatch(getBurgerIngredients())
      },[dispatch])

  return (
    <div>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
      <main className={Style.main}>
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
      </main>
      </DndProvider>
    </div>
  );
}

export default App;
