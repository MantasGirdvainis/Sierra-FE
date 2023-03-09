import Button from "components/Button/Button";
import { useEffect } from "react";
import { useState } from "react";
import { useProfile } from "providers/ProfileProvider";
import { logIn, signUp } from "api/auth/auth";
import { SignUpCredentials, SignInCredentials } from "api/auth/types";
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import Loader from "components/Loader/loader";

import { Modal } from "../Modal";
import { SignUpForm } from "./SignUpForm";
import styles from './signUpModal.module.css';



const SignUpmodal = (): JSX.Element => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isSignInForm, setIsSignForm] = useState(true)
    const { isLoggedIn, signOut, signIn } = useProfile();
    const navigate = useNavigate();

    const {
        data: signInData,
        isLoading: signInLoading,
        isSuccess: signInSuccess,
        mutate: userSignIn,

    } = useMutation((credentials: SignInCredentials) => logIn(credentials));

    const {
        data: signUpData,
        isLoading: signUpLoading,
        isSuccess: signUpSuccess,
        mutate: userSignUp,
    } = useMutation((credentials: SignUpCredentials) => signUp(credentials));

    useEffect(() => {
        if (signInData && signInData.token) {
            signIn(signInData.token);
        }
    }, [signInData]);

    useEffect(() => {
        if (signInSuccess) {
            setModalVisible(false);
            navigate('/my-movies');
        }
    }, [signInSuccess]);

    useEffect(() => {
        setIsSignForm(true);
    }, [signUpSuccess]);

    const handleOpen = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
        setIsSignForm(true);
    };

    const handleFormChange = () => {
        setIsSignForm((prev) => !prev);
    };

    const handleSubmit = (values: SignUpCredentials | SignInCredentials) => {
        { isSignInForm ? userSignIn(values) : userSignUp(values) }
    };

    return (
        <>
            <Button className={styles.linkButton} onClick={isLoggedIn ? signOut : handleOpen} >
                {isLoggedIn ? 'Sign out' : 'Sign in/up'}
            </Button>
            <Modal headerText={isSignInForm ? 'Please log-in' : 'Please sign-up'} isOpen={modalVisible}>
                {signUpSuccess && signUpData && <p>Welcome{signUpData.name}, please login with your new credentials</p>}
                {signInLoading || (signUpLoading && <Loader />)}
                <SignUpForm handleClose={handleClose} isSignInForm={isSignInForm} onFormTypeChange={handleFormChange} onSubmit={handleSubmit} />
            </Modal>
        </>
    )
};

export { SignUpmodal };
