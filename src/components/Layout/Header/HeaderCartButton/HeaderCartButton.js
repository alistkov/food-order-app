import React, { useContext, useEffect, useState } from 'react';
import CartIcon from './CartIcon';
import CartContext from '../../../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const [buttonIsHighlighted, setButtonIsHighLighted] = useState(false);
  const context = useContext(CartContext);
  const { items } = context;

  const cartMealsCount = items.reduce((acc, count) => acc + count.amount, 0);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighLighted(true);

    const timerId = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartMealsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
