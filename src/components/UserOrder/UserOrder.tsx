import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks/hooks";
import {
  wsConnectionClosed,
  wsConnectionDisconnect,
  wsConnectionStart,
} from "../../services/actions/wsAction";
import { TwsOrderType } from "../../services/types/types-api";
import { socketURL } from "../../utils/data";
import { getCookie } from "../../utils/token";
import OrderItem from "../Order/OrderItem";
import styles from "./UserOrder.module.css";
function UserOrder() {
  const dispatch = useDispatch();
  const accessToken = getCookie("access");

  useEffect(() => {
    dispatch(wsConnectionStart(`${socketURL}?token=${accessToken}`));

    return () => {
      dispatch(wsConnectionDisconnect());
    };
  }, [dispatch, accessToken]);

  const { orders } = useSelector((state) => state.ws);

  return (
    <div className={styles.container}>
      {orders &&
        orders.map((elem: TwsOrderType, index: number) => (
          <OrderItem key={index} order={elem} isPerson={true} />
        ))}
    </div>
  );
}

export default UserOrder;
