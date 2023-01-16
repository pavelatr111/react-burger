import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerItems({
  sort,
  style,
  name,
  setIngredientPopupOpen,
  setCurrentIngredient,
}) {
  const handleIngClick = (evt) => {
    console.log(evt.currentTarget.id);
    const id = evt.currentTarget.id;
    const current = sort.find((element) => element._id === id);
    console.log(current);
    setCurrentIngredient(current);
    setIngredientPopupOpen(true);
  };

  return (
    <div>
      <h3 className={"text text_type_main-medium text_color_primary pb-6"}>
        {name}
      </h3>
      <ul className={`${style.list} 'pl-4 pr-4 '`}>
        {sort.map((item) => {
          return (
            <li key={item._id} id={item._id} className={style.listItem} onClick={handleIngClick}>
              <img
                src={item.image}
                alt={item.name}
                className={"mr-4 ml-4"}
              ></img>
              <p
                className={`"mt-1 mb-1 text text_type_digits-default text_color_primary " ${style.paragraph}`}
              >
                <span className={"pr-2"}>{item.price}</span>
                <CurrencyIcon type="primary" />
              </p>
              <p
                className={`"text text_type_main-default text_color_primary " ${style.paragraph}`}
              >
                {item.name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

BurgerItems.propTypes = {
  sort: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ).isRequired,
  style: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default BurgerItems;
