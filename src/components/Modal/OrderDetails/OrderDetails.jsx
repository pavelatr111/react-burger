import style from "./OrderDetails.module.css";
import doneImg from "../../../images/order accpeted/graphics.svg";
import { useContext } from "react";
import { OrderContext } from "../../../contexts/orderContext";

function OrderDetails() {

  const { orderDetails } = useContext(OrderContext);

  return (
    <div className={style.order + " pt-15 pb-30 pr-25 pl-25"}>
      <h3 className={style.number + " text text_type_digits-large mb-8"}>
        {orderDetails.order.number}
      </h3>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <span className={"mb-15"}>
        
        <img src={doneImg} alt="Изображение завершенного статуса" />
      </span>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
