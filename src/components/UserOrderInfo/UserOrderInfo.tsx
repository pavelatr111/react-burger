import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "../../hooks/hooks";
import { getOrderAction } from "../../services/actions/orderDitails";
import { TIngredientType } from "../../services/types/types";
import styles from "./UserOrderInfo.module.css";

function UserOrderInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrderAction(id));
  }, [dispatch, id]);


  const orderInformation= useSelector((state) => state.order.orderInformation);
  const ingredients = useSelector((state) => state.ingredients.dataBurger);

  const repeatId = useMemo(
    () => {
      if (orderInformation === null) {
        return null;
      }
      return orderInformation.ingredients.filter(
        (item, index) => orderInformation.ingredients.indexOf(item) === index
      )
    }, [orderInformation]
  );

  const orderIngredients = useMemo(() => {
    if (!repeatId) {
      return;
    }
    return repeatId.map((elemId: string) => {
      return ingredients.find((elem) => elem._id === elemId);
    });
  }, [ingredients, repeatId]);


  const totalPrice = useMemo(
    () =>
      orderIngredients?.reduce(
        (acc: number, elem) =>
          elem ? elem?.price + acc : acc,
        0
      ),
    [orderIngredients]
  );

  const orderStatus = useMemo(() => {
    if (orderInformation === null) {
      return null;
    }
    return orderInformation?.status === "done"
      ? "Выполнен"
      : orderInformation?.status === "created"
      ? "Создан"
      : "Готовится";
  }, [orderInformation]);

  return (
    <main className={styles.main_container}>
      {orderInformation && (
        <>
          <p
            className={`text text_type_digits-default mb-5 ${styles.number_order}`}
          >
            #{orderInformation?.number}
          </p>
          <p className={`text text_type_main-medium mb-2`}>
            {orderInformation?.name}
          </p>
          <p
            className={`text text_type_main-default mb-10 ${styles.status_order}`}
          >
            {orderStatus}
          </p>
          <p className="text text_type_main-medium mb-6">{"Состав:"}</p>
          <section className={`${styles.fill_order} custom-scroll `}>
            {orderIngredients &&
              orderIngredients.map(
                (item: TIngredientType | undefined, i: number) => {
                    if(item === undefined){ return}
                    const countIngredient = orderInformation.ingredients.filter((elemId: string) => elemId === item?._id).length;
                  return (
                    <li key={i} className="mt-4 mr-6">
                      <div className={styles.row_fill}>
                        <div className={styles?.image_name}>
                          <div className={styles?.image_fill}>
                            <img src={item?.image_mobile} alt={item?.name} />
                          </div>
                          <p
                            className={`text text_type_main-default ml-4 ${styles.pname}`}
                          >
                            {item?.name}
                          </p>
                        </div>
                        <div className={styles.count_price}>
                          <span className="text text_type_digits-default mr-2">{`${countIngredient} X ${item?.price}`}</span>
                          <CurrencyIcon type="primary" />
                        </div>
                      </div>
                    </li>
                  );
                }
              )}
          </section>
          <section
            className={`text text_type_main-default mt-10 mb-10 ${styles.food_order}`}
          >
            <p className="text text_type_main-default text_color_inactive">
              <FormattedDate
                date={new Date(orderInformation!.createdAt)}
                className="text text_type_main-default text_color_inactive "
              />
            </p>

            <div className={styles.count_price}>
              <span className={`text text_type_digits-default mr-2`}>
                {totalPrice}
              </span>
              <CurrencyIcon type="primary" />
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default UserOrderInfo;
