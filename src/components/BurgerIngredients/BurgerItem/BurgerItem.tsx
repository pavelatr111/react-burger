import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { ingredientPropType } from "../../../utils/propTypes";

function BurgerItem({ item, style, handleIngClick, count }) {
  const location = useLocation();
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <>
      <Link
        to={{
          pathname: `/ingredients/${item._id}`,
        }}
        state={{ background: location }}
        className={style.link}
      >
        <li
          ref={dragRef}
          style={{ opacity }}
          id={item._id}
          className={style.listItem}
          onClick={handleIngClick}
        >
          <img src={item.image} alt={item.name} className={"mr-4 ml-4"}></img>
          <p
            className={`"mt-1 mb-1 text text_type_digits-default text_color_primary " ${style.paragraph}`}
          >
            <span className={"pr-2"}>{item.price}</span>
            <CurrencyIcon type="primary" />
          </p>
          <p
            className={`"text text_type_main-default text_color_primary " ${style.paragraph}`}
          >
            {item.name}
          </p>
          {count && <Counter count={count} size="default" />}
        </li>
      </Link>
    </>
  );
}
BurgerItem.propTypes = {
  item: ingredientPropType.isRequired,
  style: PropTypes.object.isRequired,
  handleIngClick: PropTypes.func.isRequired,
  count: PropTypes.number,
};

export default BurgerItem;
