import { useState, useEffect } from 'react';
import HamburgerButton from 'components/HamburgerButton/hamburgerButton';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';
import { RouteKey } from 'navigation/routes';
import { NavLink, generatePath, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import { MyMoviesLogo } from '../Icons';
import { HeaderNavigation } from './HeaderNavigation';

const navigationConfig = [
  { to: generatePath(RouteKey.Movies), name: 'Movies', private: false },
  { to: generatePath(RouteKey.MyMovies), name: 'My Movies', private: true },
];


const Header = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const { matches } = useMediaQuery({
    matchQuery: '(min-width: 768px)'
  });

  useEffect(() => {
    if (!matches) {
      setSidebarVisible(false);
    }
  }, [matches]);

  useEffect(() => {
    setSidebarVisible(false);
  }, [location]);

  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className={styles.headerElement}>
      <NavLink to={RouteKey.Index}>
        <MyMoviesLogo className={styles.headerIcon} />
      </NavLink>
      {matches ? (
        <div className={styles.navigation}>
          <HeaderNavigation listDirection="row" navigationConfig={navigationConfig} />
        </div>
      ) : (
        <>
          <div className={styles.hamburgerButtonWrapper}>
            <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} />
          </div>
          {sidebarVisible && (
            <Sidebar onBackDropClick={closeSidebar}>
              <HeaderNavigation listDirection="column" navigationConfig={navigationConfig} />
            </Sidebar>
          )}
        </>
      )}
    </header>
  );
};


export default Header;
