import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyle from "./BurgerIngredients.module.css";
import React, { useEffect, useMemo } from "react";
import BurgerItems from "./BurgerItems/BurgerItems";

import { setCurrentTabAction } from "../../services/actions/burgerIngredients";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "../../hooks/hooks";

function BurgerIngredients() {
  const { dataBurger, currentTab } = useSelector(
    (state) => state.ingredients
  );
  const dispatch = useDispatch();

  const buns = useMemo(
    () => dataBurger.filter((item: { type: string }) => item.type === "bun"),
    [dataBurger]
  );

  const mains = useMemo(
    () => dataBurger.filter((item: { type: string }) => item.type === "main"),
    [dataBurger]
  );
  const sauces = useMemo(
    () => dataBurger.filter((item: { type: string }) => item.type === "sauce"),
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

  const setCurrent = (tab: string) => {
    // console.log(tab);
    dispatch(setCurrentTabAction(String(tab)));
    const element = document.getElementById(tab);
    // console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className={`${burgerStyle.scroll} custom-scroll pt-10`}>
          <div ref={bunRef} id="bun">
            <BurgerItems sort={buns} style={burgerStyle}   name={"Булки"} id='bunsId' />
          </div>
          <div ref={sauceRef} id="sauce">
            <BurgerItems sort={sauces} style={burgerStyle} name={"Соусы"} id='sauceId' />
          </div>
          <div ref={mainRef} id="main">
            <BurgerItems sort={mains} style={burgerStyle} name={"Начинки"} id='mainId'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
