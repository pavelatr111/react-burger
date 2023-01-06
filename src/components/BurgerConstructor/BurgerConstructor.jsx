import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyle from "./BurgerConstructor.module.css";
import { dataBurger } from "../../utils/data";

import React from "react";
import BurgerItems from "./BurgerItems/BurgerItems";

function BurgerConstructor() {
  const [current, setCurrent] = React.useState("bun");
  const buns = dataBurger.filter((item) => item.type === "bun");
  const mains = dataBurger.filter((item) => item.type === "main");
  const sauces = dataBurger.filter((item) => item.type === "sauce");

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
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={burgerStyle.wrapper}>
        <div className={burgerStyle.scroll + ' custom-scroll pt-10'}>
        <div>
            <BurgerItems sort={buns}  style={burgerStyle}  name={'Булки'}/>
        </div>
        <div>
            <BurgerItems sort={sauces}  style={burgerStyle}  name={'Соусы'}/>
        </div>
        </div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
