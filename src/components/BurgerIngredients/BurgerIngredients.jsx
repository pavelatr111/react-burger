import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyle from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import BurgerItems from "./BurgerItems/BurgerItems";

function BurgerIngredients({
  dataBurger,
  setIngredientPopupOpen,
  setCurrentIngredient,
}) {
  const [current, setCurrent] = React.useState("bun");

  const buns = useMemo(
    () => dataBurger.filter((item) => item.type === "bun"),
    [dataBurger]
  );
  const mains = useMemo(
    () => dataBurger.filter((item) => item.type !== "main"),
    [dataBurger]
  );
  const sauces = useMemo(
    () => dataBurger.filter((item) => item.type === "sauce"),
    [dataBurger]
  );

  return (
    <section className={burgerStyle.main}>
      <h2 className={"text text_type_main-large mt-10 mb-5"}>
        Соберите бургер
      </h2>
      <div className={burgerStyle.tab}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={burgerStyle.wrapper}>
        <div className={`${burgerStyle.scroll} custom-scroll pt-10`}>
          <div>
            <BurgerItems
              sort={buns}
              style={burgerStyle}
              name={"Булки"}
              setIngredientPopupOpen={setIngredientPopupOpen}
              setCurrentIngredient={setCurrentIngredient}
            />
          </div>
          <div>
            <BurgerItems
              sort={sauces}
              style={burgerStyle}
              name={"Соусы"}
              setIngredientPopupOpen={setIngredientPopupOpen}
              setCurrentIngredient={setCurrentIngredient}
            />
          </div>
          <div>
            <BurgerItems
              sort={mains}
              style={burgerStyle}
              name={"Начинки"}
              setIngredientPopupOpen={setIngredientPopupOpen}
              setCurrentIngredient={setCurrentIngredient}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  dataBurger: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ).isRequired,
};

export default BurgerIngredients;
