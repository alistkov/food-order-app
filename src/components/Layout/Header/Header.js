import React from 'react';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';
import mealsImage from '../../../assets/meals.jpg';

const Header = ({ onShowCart }) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="ReactMeals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
