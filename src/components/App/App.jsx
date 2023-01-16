import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Style from "./App.module.css";
// import { dataBurger } from "../../utils/data";
// import { burgerApi } from "../../constants/constants";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails/IngredientDetails";
import OrderDetails from "../Modal/OrderDetails/OrderDetails";
import api, { getIngredients } from "../../utils/MainAPI";

function App() {
  const [dataBurger, setDataBurger] = useState([])
  const [ingredientPopupOpen, setIngredientPopupOpen] = useState(false);
  const [constructorPopupOpen, setConstructorPopupOpen] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  


useEffect(() => {
  console.log("Hello");
   getIngredients()
    .then(data => {
      console.log(data.data);
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
          setIngredientPopupOpen={setIngredientPopupOpen}
          setCurrentIngredient={setCurrentIngredient}
        />
        <BurgerConstructor
          dataBurger={dataBurger}
          setIngredientPopupOpen={setConstructorPopupOpen}
        />
      </main>
      {ingredientPopupOpen && (
        <Modal title={"Детали ингредиента"} closePopup={setIngredientPopupOpen}>
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
      {constructorPopupOpen && (
        <Modal title={" "} closePopup={setConstructorPopupOpen}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
