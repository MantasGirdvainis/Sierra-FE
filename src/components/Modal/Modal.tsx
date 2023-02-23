import { ReactNode } from 'react';

import styles from './Modal.module.css';

type ModalProps = {
  confirmText?: string;
  headerText?: string;
  isOpen: boolean;
  children: ReactNode;
}

const Modal = ({ headerText, children, isOpen }: ModalProps): JSX.Element | null => {

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>{headerText}</div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export { Modal };

