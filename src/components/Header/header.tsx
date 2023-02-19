
import { useState, useEffect } from 'react';
import HamburgerButton from 'components/HamburgerButton/hamburgerButton';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';
import NavigationLink from 'components/NavigationLink/navigationLink';
import { RouteKey } from 'navigation/routes';

import styles from './Header.module.css';
import { MyMoviesLogo } from '../Icons';




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
        <MyMoviesLogo className={styles.headerIcon} />
      </div>
      <div>
        {matches ? <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} /> : (
          <div className={styles.items}>
            <NavigationLink name='Movies' to={RouteKey.Movies} />
            <NavigationLink name="Signup" to={RouteKey.SignUp} />
          </div>
        )}

        {sidebarVisible && (
          <Sidebar onBackDropClick={closeSidebar}>
            <NavigationLink name="Movies" to={RouteKey.Movies} />
            <NavigationLink name="Signup" to={RouteKey.SignUp} />
          </Sidebar>
        )}
      </div>
    </header>
  );
};


export default Header;
