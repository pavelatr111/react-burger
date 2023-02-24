import style from './IngredientDetails.module.css'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

function IngredientDetails() {
  const {currentIngredient} =useSelector((state) => state.currentIngredient)

    return (
        <div className={style.wrapper + ' pb-15 pl-10 pr-10'} currentingredient={currentIngredient._id}>
          <img src={currentIngredient.image_large} alt={currentIngredient.name} />
          <h4 className={'mt-4 mb-8 text text_type_main-medium ' + style.title}>{currentIngredient.name}</h4>
          <ul className={style.options}>
            <li className={style.characts}>
              <span className={'text text_color_inactive text_type_main-default'}>Калории,ккал</span>
              <span className='text text_type_digits-default text_color_inactive'>{currentIngredient.calories}</span>
            </li>
            <li className={style.characts}>
            <span className={'text text_color_inactive text_type_main-default'}>Белки,г</span>
              <span className='text text_type_digits-default text_color_inactive'>{currentIngredient.proteins}</span>
            </li>
            <li className={style.characts}>
            <span className={'text text_color_inactive text_type_main-default'}>Жиры,г</span>
              <span className='text text_type_digits-default text_color_inactive'>{currentIngredient.fat}</span>
            </li> 
            <li className={style.characts}>
            <span className={'text text_color_inactive text_type_main-default'}>Углеводы,г</span>
              <span className='text text_type_digits-default text_color_inactive'>{currentIngredient.carbohydrates}</span>
            </li>
          </ul>
        </div> );
}
IngredientDetails.propTypes = {
  currentIngredient: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    __v: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default IngredientDetails;