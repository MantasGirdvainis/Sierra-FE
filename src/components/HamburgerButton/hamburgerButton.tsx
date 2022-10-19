import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './HamburgerButton.module.css';

type HamburgerButtonProps = {
  isActive: boolean;
  onClick?: () => void;
};

function HamburgerButton({ isActive, onClick }: HamburgerButtonProps): JSX.Element {
  return (
    <div className={isActive ? parseMultipleClassNames([styles.hamburgerButton, styles.active]) : styles.hamburgerButton} onClick={onClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
}

export default HamburgerButton;
