import styles from "./App.module.css";


import { useParams } from "react-router-dom";
import IngredientDetails from "../components/Modal/IngredientDetails/IngredientDetails";
import { useSelector } from "../hooks/hooks";
import { TIngredientType } from "../services/types/types";


export const IngredientPage = () => {
  const ingredients= useSelector((state) => state.ingredients.dataBurger);

  let { id } = useParams();
  // console.log(id, ingredients);
  const currentIngredient = ingredients.find((el: { _id: string; }) => el._id === id);

  if(!currentIngredient) {
    return null
  }

  return (
   (
      <div className={styles.wrap}>
        <IngredientDetails />
      </div>
    )
  );
};
