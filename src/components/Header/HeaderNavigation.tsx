import { NavLink } from 'react-router-dom';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';
import { SignUpmodal } from 'components/Modal/SignUpModal/SignUpModal';
import { RouteKey } from 'navigation/routes';

import styles from './HeaderNavigation.module.css';

type HeaderNavigationProps = {
  listDirection?: 'row' | 'column';
};

export const HeaderNavigation = ({ listDirection }: HeaderNavigationProps): JSX.Element | null => {

  return (
    <nav>
      <ul className={listDirection === 'column' ? parseMultipleClassNames([styles.unorderedList, styles.columnAlign]) : styles.unorderedList}>

        <li className={styles.listItem}>
          <NavLink className={({ isActive }) => (isActive ? parseMultipleClassNames([styles.navLink, styles.isActive]) : styles.navLink)} to={RouteKey.Index}>
            Movies
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <SignUpmodal />
        </li>
      </ul>
    </nav>
  )
};