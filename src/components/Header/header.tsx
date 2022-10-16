import styles from './Header.module.css';
import { MyMoviesLogo } from '../Icons';

// eslint-disable-next-line
const Header = () => {
  return (
    <header className={styles.headerElement}>
      <MyMoviesLogo className={styles.logo} />
    </header>
  );
};

export default Header;
