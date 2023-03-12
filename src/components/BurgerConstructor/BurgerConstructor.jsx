import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import constructorStyle from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../Modal/OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";

import {
  orderPopupAction,
  postOrderAction,
  resetOrderAction,
} from "../../services/actions/orderDitails";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../services/actions/burgerConstructor";
import BurgerConstructorItem from "./BurgerItem/BurgerConstructorItem";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/token";

function BurgerConstructor() {
  const navigate = useNavigate();
  const { buns, ingredients } = useSelector((state) => state.burger);
  const { orderPopupShow } = useSelector((state) => state.order);
  const authorization = getCookie('access') ? true : false
  const dispatch = useDispatch();

  const sum = useMemo(() => {
    return (
      ingredients.reduce((acc, curr) => acc + curr.price, 0) +
      (buns ? buns.price * 2 : 0)
    );
  }, [buns, ingredients]);

  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch(addIngredient(item));
    },
  });

  const orderRequest = () => {
    if(!authorization){
      navigate('/login');
    } else {
      const newArray = ingredients.concat(buns);
    const ingredientId = newArray.map((element) => element._id);
    dispatch(orderPopupAction());
    dispatch(postOrderAction(ingredientId));
    }
  };

  const orderPopupClose = () => {
    dispatch(orderPopupAction());
    dispatch(resetOrderAction());
  };

  return (
    <section className={constructorStyle.constructor}>
      <div
        ref={dropRef}
        className={`mb-10 mt-25`}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div className="mb-4 ml-4 mr-4 pl-8">
          {buns ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={buns?.name + " (верх)"}
              thumbnail={buns?.image}
              price={buns?.price}
            />
          ) : (
            <div
              className={`${constructorStyle.dummy} ${constructorStyle.dummy_pos_top}`}
            />
          )}
        </div>
        {ingredients.length === 0 ? (
          <div
            className={
              constructorStyle.nonFilings +
              ` ${isHover && constructorStyle.nonFilings__hover}`
            }
          >
            <h1
              className={`"text text_type_main-medium mt-5 mb-5"  ${constructorStyle.nonFilings__title} `}
            >
              Перетащите ингредиент
            </h1>
          </div>
        ) : (
          <ul className={"text custom-scroll " + constructorStyle.filings}>
            {ingredients.map((item, index) => (
              <BurgerConstructorItem
                index={index}
                item={item}
                key={item.id}
                constructorStyle={constructorStyle}
              />
            ))}
          </ul>
        )}
        <div className="mt-4 ml-4 mr-4 pl-8">
          {buns ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={buns?.name + "(низ)"}
              price={buns?.price}
              thumbnail={buns?.image}
            />
          ) : (
            <div
              className={` ${constructorStyle.dummy} ${constructorStyle.dummy_pos_bottom}`}
            />
          )}
        </div>
      </div>
      <div className={`mr-4 ${constructorStyle.price}`}>
        <span className={"text text_type_digits-medium mr-10 "}>
          {sum}
          {<CurrencyIcon />}
        </span>
        <Button
          size="large"
          type="primary"
          htmlType="button"
          onClick={orderRequest}
          disabled={!(buns && ingredients.length)}
        >
          Оформить заказ
        </Button>
      </div>
      {orderPopupShow && (
        <Modal title={" "} closePopup={orderPopupClose}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
