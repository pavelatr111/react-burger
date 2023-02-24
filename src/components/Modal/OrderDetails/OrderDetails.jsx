import style from "./OrderDetails.module.css";
import doneImg from "../../../images/order accpeted/graphics.svg";
import { useContext } from "react";
import { OrderContext } from "../../../contexts/orderContext";
import { useSelector } from "react-redux";

function OrderDetails() {
  const { order, feedRequest, feedFailed } = useSelector(
    (state) => state.order
  );

  return (
    <div className={style.order + " pt-15 pb-30 pr-25 pl-25"}>
      {feedRequest ? (
        <div className={style.louder}>
          <div className="text text_type_main-large">Загрузка....</div>
        </div>
      ) : (
        <>
          <div className={style.order}>
            <h3 className={style.number + " text text_type_digits-large mb-8"}>
              {order.number}
            </h3>
            <p className="text text_type_main-medium mb-15">
              Идентификатор заказа
            </p>
            <span className={`${style.img}"mt-15 mb-15"`}>
              <img src={doneImg} alt="Изображение завершенного статуса" />
            </span>
            <p className="text text_type_main-default mb-2">
              Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Дождитесь готовности на орбитальной станции
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
