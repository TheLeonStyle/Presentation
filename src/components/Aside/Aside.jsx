import { useState } from 'react';
import styles from './Aside.module.scss';

import LOGO from './../../img/Logo.svg';
import WHATSAPP from './../../img/aside/socials/whatsapp.svg';
import TELEGRAM from './../../img/aside/socials/telegram.svg';
import NAV1 from './../../img/aside/navigation/1.svg';
import NAV2 from './../../img/aside/navigation/2.svg';
import NAV3 from './../../img/aside/navigation/3.svg';
import NAV4 from './../../img/aside/navigation/4.svg';

const Aside = () => {
  const [navActive, setNavActive] = useState(1);

  const onClickNavigation = (index) => {
    setNavActive(index);
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__logo}>
        <img src={LOGO} alt="Логотип" className={styles.aside__image} />
        <p className={styles.aside__slogan}>Автоматизация выездного медицинского персонала</p>
      </div>

      <nav className={styles.aside__nav}>
        <button
          onClick={() => onClickNavigation(1)}
          className={`${styles.aside__button} ${navActive === 1 ? styles.active : ''}`}>
          <img src={NAV1} alt="Навигация" />
        </button>
        <button
          onClick={() => onClickNavigation(2)}
          className={`${styles.aside__button} ${navActive === 2 ? styles.active : ''}`}>
          <img src={NAV2} alt="Навигация" />
        </button>
        <button
          onClick={() => onClickNavigation(3)}
          className={`${styles.aside__button} ${navActive === 3 ? styles.active : ''}`}>
          <img src={NAV3} alt="Навигация" />
        </button>
        <button
          onClick={() => onClickNavigation(4)}
          className={`${styles.aside__button} ${navActive === 4 ? styles.active : ''}`}>
          <img src={NAV4} alt="Навигация" />
        </button>
      </nav>

      <div className={styles.aside__bottom}>
        <p className={styles.aside__title}>Вопросы:</p>
        <a href="mailto:hi@ameoli.ru" className={styles.aside__link}>
          hi@ameoli.ru
        </a>
        <p className={styles.aside__title}>Для СМИ</p>
        <a href="mailto:pr@ameoli.ru" className={styles.aside__link}>
          pr@ameoli.ru
        </a>
        <div className={styles.aside__socials}>
          <p className={styles.aside__title}>Напишите в:</p>
          <a href="" className={styles.aside__social}>
            <img src={WHATSAPP} alt="Иконка ватсапп" />
          </a>
          <a href="" className={styles.aside__social}>
            <img src={TELEGRAM} alt="Иконка телеграм" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
