import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.today}>Среда, 13 окт</div>
        <div className={styles.ranges}>
          <div className={styles.range}>
            <div>
              Новые звонки <span className={styles.green}>20 из 30 шт</span>
            </div>
            <div className={styles.range__wrapper}>
              <div className={styles.range__green} />
              <div className={styles.range__gray} />
            </div>
          </div>
          <div className={styles.range}>
            <div>
              Качество разговоров <span className={styles.yellow}>40%</span>
            </div>
            <div className={styles.range__wrapper}>
              <div className={styles.range__yellow} />
              <div className={styles.range__gray} />
            </div>
          </div>
          <div className={styles.range}>
            <div>
              Конверсия в заказ <span className={styles.red}>67%</span>
            </div>
            <div className={styles.range__wrapper}>
              <div className={styles.range__red} />
              <div className={styles.range__gray} />
            </div>
          </div>
        </div>
        <img className={styles.search} src="assets/icons/search.svg" alt="search" />
        <div className={styles.profile}>
          <div className={styles.profile__name}>
            <div className={styles.name}>ИП Сидорова Александра Михайловна</div>
            <img className={styles.arrow} src="assets/icons/arrow_down.svg" alt="arrow" />
          </div>
          <div className={styles.profile__icon}>
            <img src="assets/icons/profile.svg" alt="profile" />
            <img className={styles.arrow} src="assets/icons/arrow_down.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
