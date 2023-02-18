import { ReactNode } from 'react';

import styles from './Modal.module.css';

type ModalProps = {
    headerText?: string,
    isOpen: boolean,
    children: ReactNode
}

const Modal = ({ headerText, isOpen, children }: ModalProps): JSX.Element => {

    if (!isOpen) {
        null;
    }

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>{headerText}</div>
                <div className={styles.modalContent}>{children}</div>
                <div className={styles.modalFooter}>
                </div>
            </div>
        </div>

    )
}

export { Modal };
