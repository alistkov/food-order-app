import React, { useContext } from 'react';
import Modal from '../Ui/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import CartContext from '../../store/cart-context';

const Cart = ({ onCloseCart }) => {
  const context = useContext(CartContext);

  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const hasItems = context.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = context.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  return (
    <Modal onClose={onCloseCart}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
