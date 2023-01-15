import React from 'react';

// Stylesheets
import styles from './button.module.scss';

export enum ButtonVariant {
  BLUE = 'blue',
}

type ButtonType = {
  children: string;
  variant: ButtonVariant;
  onClick: () => void;
};

const Button = (props: ButtonType) => {
  let variant = '';
  switch (props.variant) {
    case 'blue':
      variant = styles.blue;
      break;
  }

  return (
    <button
      className={`${styles.button} ${variant}`}
      onClick={props.onClick}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
