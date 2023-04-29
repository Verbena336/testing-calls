import React, { useState } from 'react';

import styles from './CallItem.module.scss';

import { ICallItem } from './types/callItem';
import { fetchData } from 'data/fetchData';

function CallItem(props: ICallItem) {
  const hour = props.date.split(' ')[1].split(':')[0];
  const minutes = props.date.split(' ')[1].split(':')[1];
  const [rangeProcent, setRangeProcent] = useState(0);
  let callIcon;
  const timeFormat = `${Math.floor(props.time / 60)}:${
    props.time % 60 < 10 ? `0${props.time}` : props.time % 60
  }`;

  if (props.status === 'Не дозвонился') {
    props.in_out === 1
      ? (callIcon = 'assets/icons/call1.svg')
      : (callIcon = 'assets/icons/call.svg');
  } else {
    props.in_out === 1
      ? (callIcon = 'assets/icons/call3.svg')
      : (callIcon = 'assets/icons/call2.svg');
  }

  const playAudio = async () => {
    if (props.record && props.partnership_id) {
      const result = await fetchData({
        name: 'getRecord',
        id_record: props.record,
        partnership_id: props.partnership_id,
      });

      const blob = new Blob([result], { type: 'audio/mp3' });
      const url = window.URL.createObjectURL(blob);
      const audio = new Audio();
      audio.src = url;
      audio.play();
      animationRange(audio);
    }
  };

  const animationRange = (audio: HTMLMediaElement) => {
    const timer = setInterval(() => {
      setRangeProcent((audio.currentTime / audio.duration) * 100);
      if (audio.ended) {
        clearInterval(timer);
        setRangeProcent(0);
      }
    }, 500);
  };

  return (
    <tr className={styles.wrapper}>
      <td>
        <img className={styles.callImage} src={callIcon} alt="call" />
      </td>
      <td>{`${hour}:${minutes}`}</td>
      <td>
        <img className={styles.image} src={props.person_avatar} />
      </td>
      <td>{props.in_out === 1 ? `+${props.from_number}` : `+${props.to_number}`}</td>
      <td>{props.source}</td>
      <td></td>
      <td
        className={`${props.record && props.partnership_id ? styles.audio : ''} ${styles.duration}`}
      >
        {props.record && props.partnership_id ? (
          <>
            <div className={styles.audio__wrapper}>
              <div className={styles.time}>{timeFormat}</div>
              <div className={styles.controls}>
                <button className={styles.playBtn} onClick={playAudio}></button>
                <div className={styles.range}>
                  <div style={{ width: `${rangeProcent}%` }} className={styles.range__fill} />
                </div>
              </div>
              <div className={styles.download}></div>
              <div className={styles.close}></div>
            </div>
          </>
        ) : (
          timeFormat
        )}
      </td>
    </tr>
  );
}

export default CallItem;
