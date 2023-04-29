import React from 'react';

import styles from './NavItem.module.scss';

type TProps = {
  id: number;
  name: string;
  icon: string;
};

function NavItem(props: TProps) {
  return (
    <li className={`${styles.nav__item} ${props.name === 'Звонки' ? styles.active : ''}`}>
      <div className={styles.nav__content}>
        <img src={props.icon} alt="nav_icon" />
        <span>{props.name}</span>
      </div>
      {props.name === 'Звонки' && <div className={styles.yellow} />}
    </li>
  );
}

export default NavItem;
