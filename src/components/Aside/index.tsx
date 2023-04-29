import React from 'react';

import styles from './Aside.module.scss';
import { NAVIGATION } from 'data/navigation';
import NavItem from 'components/NavItem';
import Button from 'components/Button';

function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <img src="assets/icons/logo.svg" alt="skilla" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {NAVIGATION.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
      <div className={styles.btns}>
        <Button {...{ name: 'Добавить заказ', icon: 'assets/icons/plus.svg' }} />
        <Button {...{ name: 'Оплата', icon: 'assets/icons/alert.svg' }} />
      </div>
    </aside>
  );
}

export default Aside;
