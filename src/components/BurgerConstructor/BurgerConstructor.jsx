import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';
import constructorStyle from "./BurgerConstructor.module.css";

function BurgerConstructor({dataBurger}) {

    const buns = dataBurger.filter((item) => item.type === "bun");
    const filings = dataBurger.filter((item) => item.type !== "bun");
   console.log(filings);
    
    return ( 
        <section className={constructorStyle.constructor}>
             <div className={`mb-10 mt-25`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={buns[1].image}
      />
      <ul className={'text custom-scroll ' + constructorStyle.filings}>
       {filings.map((item) => (
        <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        key={item._id}
      />
       ))}
      </ul>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={buns[0].image}
      />
    </div>
    <div className={`mr-4 ${constructorStyle.price}`}>
          <span className={'text text_type_digits-medium mr-10 ' }>{2000}{<CurrencyIcon />}</span>
          <Button size="large" type="primary" htmlType='button'>Оформить заказ</Button>
        </div> 
        </section>
     );
}

BurgerConstructor.propTypes = {
    dataBurger: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         proteins: PropTypes.number.isRequired,
         fat: PropTypes.number.isRequired,
         carbohydrates: PropTypes.number.isRequired,
         calories: PropTypes.number.isRequired,
         price: PropTypes.number.isRequired,
         image: PropTypes.string.isRequired,
         image_mobile: PropTypes.string,
         image_large: PropTypes.string,
         __v: PropTypes.number
      })
    ).isRequired
  };

export default BurgerConstructor;