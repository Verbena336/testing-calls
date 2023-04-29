import React, { Dispatch, SetStateAction, useState } from 'react';

import { ICallItem } from 'components/CallItem/types/callItem';

import styles from './Filters.module.scss';

import { FILTERS } from 'data/filters';

function Filters(props: {
  setCallList: Dispatch<SetStateAction<ICallItem[]>>;
  callList: ICallItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('Все типы');

  const handleFilter = (event: React.MouseEvent<HTMLUListElement>) => {
    const { dataset } = event.target as HTMLElement;
    setFilter(dataset.type ?? 'Все типы');

    let filterCallList;

    switch (dataset.type) {
      case 'Входящие':
        filterCallList = props.callList.filter((item) => item.in_out === 1);
        break;
      case 'Исходящие':
        filterCallList = props.callList.filter((item) => item.in_out === 0);
        break;
      default:
        filterCallList = props.callList;
    }

    props.setCallList(filterCallList);

    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <img src="assets/icons/search.svg" alt="search" />
        <span>Поиск по звонкам</span>
      </div>
      <div className={styles.filter__wrapper}>
        <button className={`${styles.btn} ${styles.type}`} onClick={() => setIsOpen(!isOpen)}>
          <div>{filter}</div>
          <img
            className={styles.arrow}
            src={`assets/icons/${isOpen ? 'arrow_up' : 'arrow_down'}.svg`}
            alt="Тип"
          />
          {isOpen && (
            <ul className={styles.menu} onClick={(e) => handleFilter(e)}>
              <li
                className={`${filter === 'Все типы' ? styles.active : ''} ${styles.menu__item}`}
                data-type="Все типы"
              >
                Все типы
              </li>
              <li
                className={`${filter === 'Входящие' ? styles.active : ''} ${styles.menu__item}`}
                data-type="Входящие"
              >
                Входящие
              </li>
              <li
                className={`${filter === 'Исходящие' ? styles.active : ''} ${styles.menu__item}`}
                data-type="Исходящие"
              >
                Исходяшие
              </li>
            </ul>
          )}
        </button>
        {FILTERS.map((item) => (
          <button className={styles.btn} key={item.id}>
            <div>{item.name}</div>
            <img className={styles.arrow} src="assets/icons/arrow_down.svg" alt={item.name} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
