import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeIngredient, updateConstructor } from "../../../services/actions/burgerConstructor";

function BurgerConstructorItem({ index, item, constructorStyle }) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
      type: 'constructorItem',
      item: () => {
          return { index }
      },
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      })
  });

  const [{ handlerId }, drop] = useDrop({
      accept: 'constructorItem',
      collect: (monitor) => ({
          handlerId: monitor.getHandlerId()
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

          const hoverBoundingRect = ref.current?.getBoundingClientRect();
          const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
          const clientOffset = monitor.getClientOffset();
          const hoverClientY = clientOffset.y - hoverBoundingRect.top;

          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
              return;
          }

          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
              return;
          }

          dispatch(updateConstructor({ dragIndex, hoverIndex }));

          item.index = hoverIndex;
      }
  });

  const opacity = isDragging ? 0 : 1;

  return (
      <li className={`mb-2 ${constructorStyle.list}`}ref={drag(drop(ref))} data-handler-id={handlerId} style={{ opacity }}>
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