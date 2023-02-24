import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDrag } from "react-dnd";


function BurgerItem({ item, style, handleIngClick, count }) {



    const [{ opacity }, dragRef] = useDrag({
        type: 'ingredient',
        item: item,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });




    return (
        <li ref={dragRef} style={{ opacity }} id={item._id} className={style.listItem} onClick={handleIngClick} >
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
            {count && (
                    <Counter count={count} size="default" />
                )}
        </li>);
}

export default BurgerItem;