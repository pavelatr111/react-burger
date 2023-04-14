import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { getBurgerIngredients } from "../../services/actions/burgerIngredients";
import { wsConnectionClosed, wsConnectionStart } from "../../services/actions/wsAction";
import styles from "./Feed.module.css";



function Feed() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'));

    return () => {
      dispatch(wsConnectionClosed())
    }
  }, [dispatch]);

  const { orders, total, totalToday } = useSelector(state => state.ws);
//   useEffect(() => {
//     dispatch(getBurgerIngredients());
//   }, [dispatch]);

  const OrderRowInColumn = 10;

  const doneOrders = useMemo(
    () =>
      orders
        .filter((elem: any) => elem.status === "done")
        .map((elem: any) => elem.number),
    [orders]
  );
  const pendingOrders = useMemo(
    () =>
      orders
        .filter((elem: any) => elem.status === "pending")
        .map((elem: any) => elem.number),
    [orders]
  );

  const doneOrdersFirstColumn = useMemo(
    () => doneOrders.slice(0, OrderRowInColumn),
    [doneOrders]
  );
  const doneOrdersSecondColumn = useMemo(
    () => doneOrders.slice(OrderRowInColumn, 2 * OrderRowInColumn),
    [doneOrders]
  );

  const pendingOrdersFirstColumn = useMemo(
    () => pendingOrders.slice(0, OrderRowInColumn),
    [pendingOrders]
  );
  const pendingOrdersSecondColumn = useMemo(
    () => pendingOrders.slice(OrderRowInColumn, 2 * OrderRowInColumn),
    [pendingOrders]
  );
  
  return (
    <main className={styles.content}>
      <section className={styles.left_section}>
        <p className="text text_type_main-large mt-6">Лента заказов</p>
        <div className={`${styles.feed_orders} mt-4 mb-10`}>
          {orders &&
            orders.map((elem, index) => (
              <OrderItem key={index} order={elem} isPerson={false} />
            ))}
        </div>
      </section>
      <section className={styles.right_section}>
        <div className={styles.list_orders}>
          <section>
            <p className="text text_type_main-medium">Готовы:</p>
            <div
              className={`${styles.list_number_orders} ${styles.ready_orders}`}
            >
              <ul className={styles.ul_orders}>
                {doneOrdersFirstColumn.map((item, index) => (
                  <li key={index} className="mt-2 mr-8">
                    <Link
                      to={`${item}`}
                      state={{ background: location }}
                      className={styles.ready_order}
                    >
                      <span className="text text_type_digits-default">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.ul_orders}>
                {doneOrdersSecondColumn.map((item, index) => (
                  <li key={index} className="mt-2 mr-8">
                    <Link
                      to={`${item}`}
                      state={{ background: location }}
                      className={styles.ready_order}
                    >
                      <span className="text text_type_digits-default">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            <p className="text text_type_main-medium">В работе:</p>
            <div className={styles.list_number_orders}>
              <ul className={styles.ul_orders}>
                {pendingOrdersFirstColumn.map((item, index) => (
                  <li key={index} className="mt-2 mr-8">
                    <Link
                      to={`${item}`}
                      state={{ background: location }}
                      className={styles.work_order}
                    >
                      <span className="text text_type_digits-default">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.ul_orders}>
                {pendingOrdersSecondColumn.map((item, index) => (
                  <li key={index} className="mt-2 mr-8">
                    <Link
                      to={`${item}`}
                      state={{ background: location }}
                      className={styles.work_order}
                    >
                      <span className="text text_type_digits-default">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <section>
          <p className="text text_type_main-medium">Выполнено за все время:</p>
          <p className={`${styles.text_sh} text text_type_digits-large pb-8`}>
            {total}
          </p>
        </section>
        <section>
          <p className="text text_type_main-medium">Выполнено за сегодня:</p>
          <p className={`${styles.text_sh} text text_type_digits-large pb-8`}>
            {totalToday}
          </p>
        </section>
      </section>
    </main>
  );
}

export default Feed;
