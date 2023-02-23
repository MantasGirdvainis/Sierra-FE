import { useState, useEffect } from 'react';
import HamburgerButton from 'components/HamburgerButton/hamburgerButton';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';
import { RouteKey } from 'navigation/routes';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import { MyMoviesLogo } from '../Icons';
import { HeaderNavigation } from './HeaderNavigation';


const Header = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: '(max-width: 768px)' });

  useEffect(() => {
    if (matches) {
      setSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className={styles.headerElement}>
      <div>
        <NavLink to={RouteKey.Index}>
          <MyMoviesLogo className={styles.headerIcon} />
        </NavLink>
      </div>
      <div>
        {matches ? <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} /> : (
          <div className={styles.items}>
            <HeaderNavigation />
          </div>
        )}

        {sidebarVisible && (
          <Sidebar onBackDropClick={closeSidebar}>
            <HeaderNavigation />

          </Sidebar>
        )}
      </div>
    </header>
  );
};


export default Header;
