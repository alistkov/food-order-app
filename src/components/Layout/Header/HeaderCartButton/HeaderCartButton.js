import React, { useContext } from 'react';
import CartIcon from './CartIcon';
import CartContext from '../../../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }) => {
  const context = useContext(CartContext);

  const cartMealsCount = context.items.reduce(
    (acc, count) => acc + count.amount,
    0
  );

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartMealsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
