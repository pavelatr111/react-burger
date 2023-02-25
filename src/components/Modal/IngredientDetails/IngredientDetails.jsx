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

export default IngredientDetails;