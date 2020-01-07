import React from 'react';
import styles from './ScoreButton.css';
import classes from 'join-classnames';

const determineEmphasis = emphasis => {
  switch (emphasis) {
    case 'action':
    case 'number':
      return emphasis;
    default:
      return 'action';
  }
};

export default ({
  onClick,
  type = 'button',
  emphasis = 'primary',
  disabled = false,
  children,
  value = 'Submit',
  className
}) =>
  <button
    type={type}
    onClick={onClick}
    className={classes(
      styles.scoreButton,
      styles[determineEmphasis(emphasis)],
      className
    )}
    disabled={disabled}
  >
    {children || value}
  </button>;
