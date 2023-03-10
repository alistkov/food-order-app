import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} type="text" id={input.id} {...input} />
    </div>
  );
});

export default Input;
