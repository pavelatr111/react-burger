import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useParams } from "react-router";
import { useSelector } from "../../hooks/hooks";
import { TIngredientType } from "../../services/types/types";
import { TwsOrderType } from "../../services/types/types-api";
import styles from "./UserOrderInfo.module.css"

function UserOrderInfo() {
  //   const dispatch = useDispatch();
  const { id } = useParams();
  const { orders } = useSelector(state => state.ws);
  //   useEffect(() => {
  //     dispatch(orderInfoBurger(id));
  //   }, [dispatch, id]);

  const orderInformation = orders.find((e:TwsOrderType) => e.number == id);
//   console.log(orderInformation);

  const ingredients = useSelector((state) => state.ingredients.dataBurger);

  const orderIngredients = useMemo(() => {
    if (!orderInformation)  {
      return 
    }
    return orderInformation.ingredients.map((elemId: string) => {
      return ingredients.find((elem: { _id: string; }) => elem?._id === elemId);
    });
  }, [ingredients, orderInformation]);

  const totalPrice = useMemo(
    () => 
     orderIngredients?.reduce(
      (acc: number, elem: TIngredientType |any) =>
        elem?.price + acc,
      0
    )
  , [orderIngredients]);

//   const totalPrice = useMemo(
//     () =>
//       orderIngredients?.reduce(
//         (acc: number, elem: TIngredientType) =>
//           elem?.price + acc,
//         0
//       ),
//     [orderIngredients]
//   );


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
                          <span className="text text_type_digits-default mr-2">{`1 x ${
                            item?.price
                          }`}</span>
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