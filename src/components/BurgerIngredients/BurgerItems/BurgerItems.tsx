
import { FC, MouseEvent, useMemo } from "react";
import { useDispatch, useSelector } from "../../../hooks/hooks";

import { getCurrentIngredient } from "../../../services/actions/ingredientDitails";
import { TIngredientType } from "../../../services/types/types";

import BurgerItem from "../BurgerItem/BurgerItem";

type TBurgerItemsProps = {
  sort: TIngredientType[], style: CSSModule, name: string
}

const BurgerItems: FC<TBurgerItemsProps> = ({ sort, style, name }) =>{
  const { buns: currentBun, ingredients: currentIngredients } =
    useSelector((state) => state.burger);

  const dispatch = useDispatch();

  const handleIngClick = (evt: MouseEvent<HTMLLIElement>) => {
    const id = evt.currentTarget.id;
    const current = sort.find((element: { _id: string; }) => element._id === id);
    dispatch(getCurrentIngredient(current));
  };

  const ingredientCount = useMemo(() => {
    const result: { [name: string]: number; }  = {};
    console.log(result);
    
    if (currentBun) {
      result[currentBun._id] = 2;
    }

    currentIngredients.forEach((ingredient) => {
      result[ingredient._id] = !result[ingredient._id]
        ? 1
        : result[ingredient._id] + 1;
    });

    return result;
  }, [currentBun, currentIngredients]);

  return (
    <div>
      <h3 className={"text text_type_main-medium text_color_primary pb-6"}>
        {name}
      </h3>
      <ul className={`${style.list} 'pl-4 pr-4 '`}>
        {sort.map((item: TIngredientType) => {
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

export default BurgerItems;
