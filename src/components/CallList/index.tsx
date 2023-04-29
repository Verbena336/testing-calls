import React from 'react';

import styles from './CallList.module.scss';
import CallItem from 'components/CallItem';
import { ICallItem } from 'components/CallItem/types/callItem';

function CallList(props: { elements: ICallItem[] }) {
  const arr = [...props.elements];
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th className={styles.type}>Тип</th>
            <th className={styles.time}>Время</th>
            <th className={styles.emploee}>Сотрудник</th>
            <th className={styles.number}>Звонок</th>
            <th className={styles.source}>Источник</th>
            <th>Оценка</th>
            <th className={styles.duration}>Длительность</th>
          </tr>
        </thead>
        <tbody className={styles.callList}>
          {arr.map((callItem: ICallItem) => (
            <CallItem key={callItem.id} {...callItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CallList;
