import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerStyle from "./BurgerIngredients.module.css";

import React from "react";
import BurgerItems from "./BurgerItems/BurgerItems";

function BurgerIngredients({ dataBurger }) {
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
        <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={burgerStyle.wrapper}>
        <div className={`${burgerStyle.scroll} custom-scroll pt-10`}>
          <div>
            <BurgerItems sort={buns} style={burgerStyle} name={"Булки"} />
          </div>
          <div>
            <BurgerItems sort={sauces} style={burgerStyle} name={"Соусы"} />
          </div>
          <div>
            <BurgerItems sort={mains} style={burgerStyle} name={"Начинки"} />
          </div>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  dataBurger: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      _id:React.PropTypes.string.isRequired,
       name:React.PropTypes.string.isRequired,
       type:React.PropTypes.string.isRequired,
       proteins:React.PropTypes.number.isRequired,
       fat:React.PropTypes.number.isRequired,
       carbohydrates:React.PropTypes.number.isRequired,
       calories:React.PropTypes.number.isRequired,
       price:React.PropTypes.number.isRequired,
       image:React.PropTypes.string.isRequired,
       image_mobile:React.PropTypes.string.isRequiredReact.PropTypes.string,
       image_large:React.PropTypes.string,
       __v:React.PropTypes.number
    })
  ).isRequired
};

export default BurgerIngredients;
