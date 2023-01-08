import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
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
    dataBurger: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        _id:React.PropTypes.string.isRequired,
         name:React.PropTypes.string.isRequired,
         type:React.PropTypes.string.isRequired,
         proteins:React.PropTypes.number.isRequired,
         fat:React.PropTypes.number.isRequired,
         carbohydrates:React.PropTypes.number.isRequired,
         calories:React.PropTypes.number.isRequired,
         price:React.PropTypes.number.isRequired,
         image:React.PropTypes.string.isRequired,
         image_mobile:React.PropTypes.string.isRequiredReact.PropTypes.string,
         image_large:React.PropTypes.string,
         __v:React.PropTypes.number
      })
    ).isRequired
  };

export default BurgerConstructor;