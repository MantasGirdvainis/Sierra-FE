import Button from "components/Button/Button";
import { useState } from "react";

import { Modal } from "../Modal";
import { SignUpForm } from "./SignUpForm";
import styles from './signUpModal.module.css';

const SignUpmodal = (): JSX.Element => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleOpen = () => {
        setModalVisible(true);
    }

    const handleClose = () => {
        setModalVisible(false);
    }

    return (
        <>
            <Button className={styles.linkButton} onClick={handleOpen} >
                Sign Up
            </Button>
            <Modal headerText='Please sign-up' isOpen={modalVisible}  >
                <SignUpForm handleClose={handleClose} />
            </Modal>
        </>
    )
};

export { SignUpmodal };
