import { useEffect} from "react";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { wsConnectionDisconnect, wsConnectionStart } from "../../services/actions/wsAction";
import { socketURL } from "../../utils/data";
import styles from "./Feed.module.css";



function Feed() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(wsConnectionStart(`${socketURL}/all`));

    return () => {
      dispatch(wsConnectionDisconnect())
    }
  }, [dispatch]);

  const { orders, total, totalToday } = useSelector(state => state.ws);
//   useEffect(() => {
//     dispatch(getBurgerIngredients());
//   }, [dispatch]);
  
  return (
    <main className={styles.content}>
      <section className={styles.left_section}>
        <p className="text text_type_main-large mt-6">Лента заказов</p>
        <div className={`${styles.feed_orders} mt-4 mb-10 custom-scroll `}>
          {orders &&
            orders.map((elem, index) => (
              <OrderItem key={index} order={elem} isPerson={false} />
            ))}
        </div>
      </section>
      <section className={styles.right_section}>
        <div className={styles.list_orders}>
          <section className={`${styles.board} mt-15`}>
             <div className={styles.orders}>
          <div className={styles.box}>
            <p className='text text_type_main-medium mb-6'>Готовы:</p>
            <div className={styles.container}>
              <ul className={styles.done}>
                {orders.map((item, index) => {
                  if (item.status === 'done' && index < 10)
                    return (<li key={item._id} className={`${styles.doneId} text text_type_digits-default`}>{item.number}</li>)
                })
                }
              </ul>
              <ul className={styles.done}>
                {orders.map((item, index) => {
                  if (item.status === 'done' && index < 20 && index >= 10)
                    return (<li key={item._id} className={`${styles.doneId} text text_type_digits-default ml-2`}>{item.number}</li>)
                })
                }
              </ul>

            </div>
          </div>
          <div className={styles.work}>
            <p className='text text_type_main-medium mb-6'>В работе:</p>
            {orders.map((item, index) => {
              if (item.status !== 'done' && index < 10)
                return (<li key={item._id} className={`${styles.workId} text text_type_digits-default`}>{item.number}</li>)
            })
            }
          </div>
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
