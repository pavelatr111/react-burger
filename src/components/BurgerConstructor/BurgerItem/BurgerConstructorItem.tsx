import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {  FunctionComponent, useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";

import {
  removeIngredient,
  updateConstructor,
} from "../../../services/actions/burgerConstructor";
import { useDispatch } from "../../../hooks/hooks";
import {  TIngredientType } from "../../../services/types/types";



interface IBurgerConstructorProps {
  index: number
  item: TIngredientType
  constructorStyle: CSSModule
}

const BurgerConstructorItem: FunctionComponent<IBurgerConstructorProps>=({ index, item, constructorStyle }) =>{

  // console.log(typeof(item.id));
  
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "constructorItem",
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, drop] = useDrop({
    accept: "constructorItem",
    collect: (monitor: DropTargetMonitor<{index: number}>) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();


      if(clientOffset === null){
        return
      }
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(updateConstructor({ dragIndex, hoverIndex }));

      item.index = hoverIndex;
    },
  });

  const opacity = isDragging ? 0 : 1;

  if (item.type !== "bun") drag(drop(ref));

  return (
    <li
      className={`mb-2 ${constructorStyle.list}`}
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => dispatch(removeIngredient(item.id))}
      />
    </li>
  );
}


export default BurgerConstructorItem;
