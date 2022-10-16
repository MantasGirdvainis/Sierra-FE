import styles from './Header.module.css';
import { MyMoviesLogo } from '../Icons';

const Header = (): JSX.Element => {
  return (
    <header className={styles.headerElement}>
      <MyMoviesLogo className={styles.logo} />
    </header>
  );
};

export default Header;
