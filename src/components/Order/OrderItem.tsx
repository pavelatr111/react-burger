import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {  useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {  useSelector } from "../../hooks/hooks";
import { TIngredientType } from "../../services/types/types";
import { TwsOrderType } from "../../services/types/types-api";
import styles from "./OrderItem.module.css";

type TOrderProps = {
  readonly order: TwsOrderType;
  readonly isPerson: boolean;
} 

function OrderItem(props: TOrderProps) {
  const location = useLocation();
  const { dataBurger } = useSelector((state) => state.ingredients);
  const countItemsMax = 6;

  

  const orderStatus = useMemo(
    () =>
      props.order.status === "done"
        ? "Выполнен"
        : props.order.status === "created"
        ? "Создан"
        : "Готовится",
    [props]
  );

  const colorStatus = useMemo(
    () =>
      props.order.status === "done"
        ? styles.status_done
        : styles.status_default,
    [props]
  );
   

  const orderIngredients = useMemo(() => {
    const ingredients: TIngredientType[] = [];
    props.order.ingredients.forEach((ingredientId)=> {
      if(ingredientId !== null || ingredientId !== undefined) {
        const ingredientItem = dataBurger
        .find(ingredient => ingredient._id === ingredientId);
        if(ingredientItem !== undefined) {
          ingredients.push(ingredientItem);
        }
      }
    });
    return ingredients;
}, [props.order, dataBurger]);



  const firstSixItems = useMemo(
    () => orderIngredients.slice(0, countItemsMax),
    [orderIngredients]
  );

  const totalPrice = useMemo(
    () =>
      orderIngredients.reduce(
        (acc: number, elem) =>
          elem ? elem.price + acc : acc,
        0
      ),
    [orderIngredients]
  );

 
  

  return (
    <Link
      className={styles.structure_order}
      to={`${location.pathname}/${props.order.number}`}
      state={{ background: location.pathname }}
    >
      <div className={styles.structure_order_info}>
        <div className={styles.number_order}>
          <p className="text text_type_digits-default">#{props.order.number}</p>
        </div>
        <div className={styles.time_order}>
          <FormattedDate
            date={new Date(props.order.createdAt)}
            className="text text_type_main-default text_color_inactive"
          />
        </div>
      </div>
      <p className={`${styles.title_order} text text_type_main-medium`}>
        {props.order.name}
      </p>
      {props.isPerson && orderStatus && (
        <p
          className={`${styles.status_order} ${colorStatus} text text_type_main-default`}
        >
          {orderStatus}
        </p>
      )}
      <div className={styles.filling}>
        <div className={styles.images_selection}>
          {firstSixItems &&
            firstSixItems.map((item: TIngredientType, i: number) => {
              let zIndex = countItemsMax - i;
              let right = -2 * 10;
              let otherIngredients =
                props.order.ingredients.length - countItemsMax + 1;
              return (
                <li
                  key={i}
                  style={{ zIndex: zIndex, marginRight: right }}
                  className={styles.image}
                >
                  <img
                    style={{ opacity: countItemsMax === (i + 1) ? "0.4" : "1" }}
                    src={item?.image_mobile}
                    alt={item?.name}
                    className={styles.image_position}
                  />
                  {otherIngredients > 0 && i === countItemsMax - 1 && (
                    <span
                      className={`${styles.count_hidden} text text_type_main-default`}
                    >
                      +{otherIngredients}
                    </span>
                  )}
                </li>
              );
            })}
        </div>
        <div className={styles.price}>
          <span className={`text text_type_digits-default`}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
}

export default OrderItem;
