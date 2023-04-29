import React, { Dispatch, SetStateAction, useState } from 'react';

import styles from './DatePicker.module.scss';

import { DATE_RANGE } from 'data/dateRange';

function DatePicker(props: {
  setDatePick: Dispatch<
    SetStateAction<{
      from: string;
      to: string;
    }>
  >;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dateFilter, setDateFilter] = useState('3 дня');
  const dateArr = ['3 дня', 'Неделя', 'Месяц', 'Год'];

  const changeDatePick = (date: string) => {
    switch (date) {
      case '3 дня':
        props.setDatePick({
          from: DATE_RANGE.THREE_DAYS_AGO.toLocaleString(),
          to: DATE_RANGE.TODAY.toLocaleString(),
        });
        break;
      case 'Неделя':
        props.setDatePick({
          from: DATE_RANGE.WEEK_AGO.toLocaleDateString(),
          to: DATE_RANGE.TODAY.toLocaleDateString(),
        });
        break;
      case 'Месяц':
        props.setDatePick({
          from: DATE_RANGE.MONTH_AGO.toLocaleDateString(),
          to: DATE_RANGE.TODAY.toLocaleDateString(),
        });
        break;
      case 'Год':
        props.setDatePick({
          from: DATE_RANGE.YEAR_AGO.toLocaleDateString(),
          to: DATE_RANGE.TODAY.toLocaleDateString(),
        });
        break;
    }
  };

  const handleFilter = (event: React.MouseEvent<HTMLUListElement>) => {
    const dataset = (event.target as HTMLElement).dataset;
    setDateFilter(dataset.type ?? '3 дня');
    changeDatePick(dataset.type ?? '3 дня');
    setIsOpen(false);
  };

  const handleNext = () => {
    const nextIdx =
      dateArr.indexOf(dateFilter) >= dateArr.length - 1 ? 0 : dateArr.indexOf(dateFilter) + 1;
    changeDatePick(dateArr[nextIdx]);
    setDateFilter(dateArr[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx =
      dateArr.indexOf(dateFilter) < 1 ? dateArr.length - 1 : dateArr.indexOf(dateFilter) - 1;
    changeDatePick(dateArr[prevIdx]);
    setDateFilter(dateArr[prevIdx]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <button className={styles.arrow} onClick={handlePrev}>
          <img src="assets/icons/arrow_left.svg" alt="arrow_left" />
        </button>
        <div className={styles.date} onClick={() => setIsOpen(!isOpen)}>
          <img className={styles.calendar} src="assets/icons/icon-calendar.svg" alt="calendar" />
          <div className={styles.date__text}>{dateFilter}</div>
        </div>
        <button className={styles.arrow} onClick={handleNext}>
          <img src="assets/icons/arrow_right.svg" alt="arrow_right" />
        </button>
      </div>
      {isOpen && (
        <ul className={styles.menu} onClick={(e) => handleFilter(e)}>
          <li
            className={`${dateFilter === '3 дня' ? styles.active : ''} ${styles.menu__item}`}
            data-type="3 дня"
          >
            3 дня
          </li>
          <li
            className={`${dateFilter === 'Неделя' ? styles.active : ''} ${styles.menu__item}`}
            data-type="Неделя"
          >
            Неделя
          </li>
          <li
            className={`${dateFilter === 'Месяц' ? styles.active : ''} ${styles.menu__item}`}
            data-type="Месяц"
          >
            Месяц
          </li>
          <li
            className={`${dateFilter === 'Год' ? styles.active : ''} ${styles.menu__item}`}
            data-type="Год"
          >
            Год
          </li>
        </ul>
      )}
    </div>
  );
}

export default DatePicker;
