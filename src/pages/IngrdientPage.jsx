import styles from './App.module.css';

import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import IngredientDetails from '../components/Modal/IngredientDetails/IngredientDetails';

export const IngredientPage = () => {
  const ingredients = useSelector((state) => state.ingredients.dataBurger);

  let { id }  = useParams();
    // console.log(id, ingredients);
  const currentIngredient = ingredients.find((el) => el._id === id);

  return  (
    currentIngredient && (
      <div className={styles.wrap}>
       <IngredientDetails currentIngredient={currentIngredient} />
      </div>
    )
  )
}