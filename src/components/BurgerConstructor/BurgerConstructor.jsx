import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import  { useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import constructorStyle from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "../Modal/OrderDetails/OrderDetails";
import { burgerContext } from "../../contexts/burgerContext";
import { orderPost } from "../../utils/MainAPI";
import { OrderContext } from "../../contexts/orderContext";

function BurgerConstructor() {

  const { dataBurger } = useContext(burgerContext);
  const buns = useMemo(() => dataBurger.find((item) => item.type === 'bun'), [dataBurger]);
  const filings = useMemo(() => dataBurger.filter((item) => item.type !== "bun"), [dataBurger]);

  const { orderDetails, setOrderDetails } = useContext(OrderContext);

  const sum = useMemo(() => {
    return dataBurger.reduce(
      (acc, item) => 
      item.type === buns ? acc + item.price * 2 : acc + item.price, 0);
  }, [dataBurger, buns]);

  const [constructorPopupOpen, setConstructorPopupOpen] = useState(false);

  const orderRequest = () => {
    const newArray = filings.concat(buns);
    const ingredientId = newArray.map((element) => element._id)
    orderPost(ingredientId)
    .then(res => setOrderDetails(res))
      .catch(err => console.log(`Ошибка ${err.status}`))
    setConstructorPopupOpen(true);
  }
  
  return (
    <section className={constructorStyle.constructor}>
      <div
        className={`mb-10 mt-25`}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div  className="mb-4 ml-4 mr-4 pl-8">
        {buns && (
        <ConstructorElement
            type="top"
            isLocked={true}
            text={buns?.name + ' (верх)'}
            thumbnail={buns?.image}
            price={buns?.price}
          />
        )}
        </div>
        <ul className={"text custom-scroll " + constructorStyle.filings}>
          {filings.map((item) => (
            <li className={`mb-4 ${constructorStyle.list}`} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
        </ul>
        <div className="mb-4 ml-4 mr-4 pl-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={buns?.name + '(низ)'}
            price={buns?.price}
            thumbnail={buns?.image}
          />
        </div>
      </div>
      <div className={`mr-4 ${constructorStyle.price}`}>
        <span className={"text text_type_digits-medium mr-10 "}>
          {sum}
          {<CurrencyIcon />}
        </span>
        <Button size="large" type="primary" htmlType="button" onClick={ orderRequest} >
          Оформить заказ
        </Button>
      </div>
      {constructorPopupOpen && (
        <Modal title={" "} closePopup={setConstructorPopupOpen}>
          <OrderDetails />
        </Modal>
      )} 
    </section>
    
  );
}

BurgerConstructor.propTypes = {
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
  //   }).isRequired
  // ).isRequired,
};

export default BurgerConstructor;
