import React from 'react';

import styles from './Button.module.scss';

type TProps = {
  name: string;
  icon: string;
};

function Button(props: TProps) {
  return (
    <button className={styles.btn}>
      <div className={props.name === 'Оплата' ? styles.center : styles.btn__text}>{props.name}</div>
      <img className={styles.icon} src={props.icon} alt="button" />
    </button>
  );
}

export default Button;
