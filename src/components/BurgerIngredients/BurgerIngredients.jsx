import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyle from "./BurgerIngredients.module.css";
// import PropTypes from "prop-types";
import React, { useEffect, useMemo, useRef } from "react";
import BurgerItems from "./BurgerItems/BurgerItems";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Modal/IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentIngredient } from "../../services/actions/ingredientDitails";
import { setCurrentTabAction } from "../../services/actions/burgerIngredients";
import { useInView } from "react-intersection-observer";

function BurgerIngredients({
  setCurrentIngredient,
  // currentIngredient
}) {
  const { dataBurger, currentTab } = useSelector((state) => state.ingredients);
  const { currentIngredient } = useSelector((state) => state.currentIngredient);
  
  const dispatch = useDispatch();

  // const bunRef = useRef(null);
  // const sauceRef = useRef(null);
  // const mainRef = useRef(null);
  // const tabRef = useRef(null);
  // console.log(tabRef.current);

  const buns = useMemo(
    () => dataBurger.filter((item) => item.type === "bun"),
    [dataBurger]
  );
  
  const mains = useMemo(
    () => dataBurger.filter((item) => item.type === "main"),
    [dataBurger]
  );
  const sauces = useMemo(
    () => dataBurger.filter((item) => item.type === "sauce"),
    [dataBurger]
  );


const [bunRef, inViewBuns] = useInView({
  threshold: 0,
});

const [mainRef, inViewFilling] = useInView({
  threshold: 0,
});
const [sauceRef, inViewSauces] = useInView({
  threshold: 0,
});

useEffect(() => {
  if (inViewBuns) {
    dispatch(setCurrentTabAction("bun"));
  } else if (inViewSauces) {
    dispatch(setCurrentTabAction("sauce"));
  } else if (inViewFilling) {
    dispatch(setCurrentTabAction("main"));
  }
}, [inViewBuns, inViewFilling, inViewSauces]);

const setCurrent = (tab) => {
  console.log(tab);
  dispatch(setCurrentTabAction(tab));
  const element = document.getElementById(tab);
  console.log(element);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

// useEffect(() => {
//   if (currentTab === "bun") {
//     bunRef.current?.scrollIntoView({ behavior: "smooth" });
//   }
//   if (currentTab === "sauce") {
//     sauceRef.current?.scrollIntoView({ behavior: "smooth" });
//   }
//   if (currentTab === "main") {
//     mainRef.current?.scrollIntoView({ behavior: "smooth" });
//   }
// }, [currentTab]);



//   const setCurrent = (value) => {
//     c
//   };
  
  
  return (
    <section className={burgerStyle.main}>
      <h2 className={"text text_type_main-large mt-10 mb-5"}>
        Соберите бургер
      </h2>
      <div className={burgerStyle.tab}>
        <Tab value="bun" active={currentTab === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={currentTab === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={currentTab === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={burgerStyle.wrapper}>
        <div className={`${burgerStyle.scroll} custom-scroll pt-10`} >
          <div ref={bunRef} id="bun">
            <BurgerItems
              sort ={buns}
              style={burgerStyle}
              name={"Булки"}
              
              // setIngredientPopupOpen={setIngredientPopupOpen}
              // setCurrentIngredient={setCurrentIngredient}
            />
          </div>
          <div ref={sauceRef} id="sauce">
            <BurgerItems
              sort={sauces}
              style={burgerStyle}
              name={"Соусы"}

              // setIngredientPopupOpen={setIngredientPopupOpen}
              // setCurrentIngredient={setCurrentIngredient}
            />
          </div>
          <div ref={mainRef} id="main">
            <BurgerItems
              sort={mains}
              style={burgerStyle}
              name={"Начинки"}
              // setIngredientPopupOpen={setIngredientPopupOpen}
              // setCurrentIngredient={setCurrentIngredient}
            />
          </div>
        </div>
      </div>
      {currentIngredient && (
        <Modal
          title={"Детали ингредиента"}
          closePopup={() => dispatch(getCurrentIngredient(null))}
        >
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  // dataBurger: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     _id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     type: PropTypes.string.isRequired,
  //     proteins: PropTypes.number.isRequired,
  //     fat: PropTypes.number.isRequired,
  //     carbohydrates: PropTypes.number.isRequired,
  //     calories: PropTypes.number.isRequired,
  //     price: PropTypes.number.isRequired,
  //     image: PropTypes.string.isRequired,
  //     image_mobile: PropTypes.string,
  //     image_large: PropTypes.string,
  //     __v: PropTypes.number,
  //   })
  // ).isRequired,
};

export default BurgerIngredients;
