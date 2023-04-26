import { IMessage } from "../services/actions/wsAction";
import { TwsOrderType } from "../services/types/types-api";

export const mainTestIngredient = {
  calories: 6,
  carbohydrates: 3,
  fat: 2,
  image: "https://code.s3.yandex.net/react/code/salad.png",
  image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
  name: "Мини-салат Экзо-Плантаго",
  price: 4400,
  proteins: 1,
  type: "main",
  __v: 0,
  _id: "60d3b41abdacab0026a733d3",
  id: "4",
};
export const sauceTestIngredient = {
  calories: 99,
  carbohydrates: 42,
  fat: 24,
  image: "https://code.s3.yandex.net/react/code/sauce-03.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
  name: "Соус традиционный галактический",
  price: 15,
  proteins: 42,
  type: "sauce",
  __v: 0,
  _id: "60d3b41abdacab0026a733ce",
  id: "3",
};
export const bunTestIngredient = {
  _id: "60d3b41abdacab0026a733c6",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
  id: "2",
};

export const ingredients = [
  {
    _id: "60d3b41abdacab0026a733c6",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
    id: "1",
  },
  {
    _id: "60d3b41abdacab0026a733cc",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
    id: "2",
  },
  {
    _id: "60d3b41abdacab0026a733c8",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
    id: "2",
  },
];

export const userTest = {
  success: true,
  name: "ATR",
  email: "qqq@qqq.ru",
};

export const getUserTest = {
  success: true,
  user: {
    success: true,
    name: "ATR",
    email: "qqq@qqq.ru",
  },
};

export const orderInfoTest: TwsOrderType = {
    ingredients: [],
    _id: "",
    status: "done",
    number: 0,
    createdAt: "",
    updatedAt: "",
    name: "",
  };
  export const registrationTest =  {
    success: true,
    accessToken: 'qwe',
    refreshToken: 'qwe',
    user: {
        success: true,
        name: "ATR",
        email: "qqq@qqq.ru",
      },
  }

  export const allOrdersTest: IMessage = {
    orders: [
        {
            createdAt: "2022-12-12T08:28:10.901Z",
            ingredients: [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733c7"
            ],
            name: "Био-марсианский флюоресцентный бургер",
            number: 11111,
            status: 'done',
            updatedAt: "2022-12-12T08:28:10.901Z",
            _id: "6396e61a99a25c001cd6893c"
        },
        {
            createdAt: "2022-12-12T07:38:02.547Z",
            ingredients: [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733ce",
                "60d3b41abdacab0026a733c6"
            ],
            name: "Традиционный-галактический краторный бургер",
            number: 22222,
            status: "done",
            updatedAt: "2022-12-12T07:38:03.348Z",
            _id: "6396da5a99a25c001cd6890d"
        }
    ],
    total: 44444,
    totalToday: 444
}
