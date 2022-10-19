import HamburgerButton from 'components/HamburgerButton/hamburgerButton';
import { useState } from 'react';

import styles from './Header.module.css';
import { MyMoviesLogo } from '../Icons';

const Header = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  function changeActive() {
    setIsActive(!isActive);
  }

  return (
    <header className={styles.headerElement}>
      <MyMoviesLogo className={styles.logo} />
      <HamburgerButton isActive={isActive} onClick={changeActive} />
    </header>
  );
};

export default Header;
