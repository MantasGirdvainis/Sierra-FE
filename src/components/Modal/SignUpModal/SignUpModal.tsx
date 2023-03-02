import Button from "components/Button/Button";
import { useState } from "react";
import { useProfile } from "providers/ProfileProvider";

import { Modal } from "../Modal";
import { SignUpForm } from "./SignUpForm";
import styles from './signUpModal.module.css';



const SignUpmodal = (): JSX.Element => {

    const [modalVisible, setModalVisible] = useState(false);
    const { isLoggedIn, signOut } = useProfile();
    const [isSignInForm, setIsSignForm] = useState(true)

    const handleOpen = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleFormChange = () => {
        setIsSignForm((prev) => !prev);
    };

    return (
        <>
            <Button className={styles.linkButton} onClick={isLoggedIn ? signOut : handleOpen} >
                {isLoggedIn ? 'Sign out' : 'Sign in/up'}
            </Button>
            <Modal headerText={isSignInForm ? 'Please log-in' : 'Please sign-up'} isOpen={modalVisible}  >
                <SignUpForm handleClose={handleClose} isSignInForm={isSignInForm} onFormTypeChange={handleFormChange} />
            </Modal>
        </>
    )
};

export { SignUpmodal };
