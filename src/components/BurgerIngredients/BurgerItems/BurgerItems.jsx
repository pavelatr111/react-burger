import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

function BurgerItems({ sort, style, name }) {
  return (
    <div>
      <h3 className={"text text_type_main-medium text_color_primary pb-6"}>
        {name}
      </h3>
      <ul className={`${style.list} 'pl-4 pr-4 '` }>
        {sort.map((item) => {
          return (
            <li key={item._id} className={style.listItem}>
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
                className={
                  `"text text_type_main-default text_color_primary " ${style.paragraph}`
                }
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
  sort: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  style: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default BurgerItems;
