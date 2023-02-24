import PropTypes from "prop-types";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentIngredient } from "../../../services/actions/ingredientDitails";
import BurgerItem from "../BurgerItem/BurgerItem";

function BurgerItems({ sort, style, name }) {
  const { buns: currentBun, ingredients: currentIngredients } = useSelector(
    (state) => state.burger
  );

  const dispatch = useDispatch();

  const handleIngClick = (evt) => {
    const id = evt.currentTarget.id;
    const current = sort.find((element) => element._id === id);
    dispatch(getCurrentIngredient(current));
  };

  const ingredientCount = useMemo(() => {
    const result = {};

    if (currentBun) {
      result[currentBun._id] = 2;
    }
// console.log(result[currentBun._id]);
    currentIngredients.forEach((ingredient) => {
      
      result[ingredient._id] = !result[ingredient._id]
        ? 1
        : result[ingredient._id] + 1;
    });
    console.log(result);
    return result;
  }, [currentBun, currentIngredients]);


  return (
    <div>
      <h3 className={"text text_type_main-medium text_color_primary pb-6"}>
        {name}
      </h3>
      <ul className={`${style.list} 'pl-4 pr-4 '`}>
        {sort.map((item) => {
          return (
            <BurgerItem
              key={item._id}
              item={item}
              handleIngClick={handleIngClick}
              style={style}
              count={ingredientCount[item._id]}
            />
          );
        })}
      </ul>
    </div>
  );
}

BurgerItems.propTypes = {
  // sort: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     _id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     type: PropTypes.string.isRequired,
  //     proteins: PropTypes.number.isRequired,
  //     fat: PropTypes.number.isRequired,
  //     carbohydrates: PropTypes.number.isRequired,
  //     calories: PropTypes.number.isRequired,
  //     price: PropTypes.number.isRequired,
  //     image: PropTypes.string.isRequired,
  //     image_mobile: PropTypes.string,
  //     image_large: PropTypes.string,
  //     __v: PropTypes.number,
  //   })
  // ).isRequired,
  style: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default BurgerItems;
