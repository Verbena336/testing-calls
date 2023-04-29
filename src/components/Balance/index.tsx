import React from 'react';

import styles from './Balance.module.scss';

function Balance() {
  return (
    <button className={styles.balance}>
      <span>
        Баланс: <span className={styles.balance__value}>272 ₽</span>
      </span>
      <img className={styles.balance__image} src="assets/icons/plus.svg" alt="plus_balance" />
    </button>
  );
}

export default Balance;
