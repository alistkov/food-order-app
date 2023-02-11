import React from 'react';
import Modal from '../Ui/Modal/Modal';
import classes from './Cart.module.css';

const Cart = ({ onCloseCart }) => {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );

  return (
    <Modal onClose={onCloseCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount 35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;