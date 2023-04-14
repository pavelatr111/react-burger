import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/wsAction";
import { getCookie } from "../../utils/token";
import OrderItem from "../OrderItem/OrderItem";
import styles from "./UserOrder.module.css"
function UserOrder() {
  const dispatch = useDispatch();
  const accessToken = getCookie('access'); 


  useEffect(() => {
    dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));

    return () => {
      dispatch(wsConnectionClosed())
    }
  }, [dispatch, accessToken]);

  const { orders } = useSelector(state => state.ws);

    return ( 
        <div className={styles.container}>
      {orders && orders.map((elem: any, index: number) => 
        <OrderItem key={index} order={elem} isPerson={true} />
      )}
    </div>
     );
}

export default UserOrder;