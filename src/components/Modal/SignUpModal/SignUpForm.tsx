import { logIn, signUp } from "api/auth/auth";
import { SignUpCredentials, SignInCredentials } from "api/auth/types";
import Button from "components/Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import styles from './signUpForm.module.css';

type SignUpProps = {
    handleClose: () => void,
    isSignInForm: boolean,
    onFormTypeChange: () => void

}

const SignUpForm = ({ handleClose, isSignInForm, onFormTypeChange }: SignUpProps): JSX.Element => {

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format!').required('Required!'),
        password: Yup.string().required('Required!')
    })

    const handleSubmit = (values: SignUpCredentials | SignInCredentials) => {
        {isSignInForm ? logIn(values) : signUp(values)  }
        
    }

    

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
            <Form >
                {!isSignInForm &&
                    <div className={styles.fieldWrapper}>
                        <label className={styles.label} htmlFor='name'>Full name</label>
                        <Field className={styles.field} id='name' name='name' placehodler='Enter full name' type='text' />
                        <ErrorMessage name='name'>
                            {errorMsg => <div className={styles.error}>{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                }
                <div className={styles.fieldWrapper}>
                    <label className={styles.label} htmlFor='email'>User email</label>
                    <Field className={styles.field} id='email' name='email' placehodler='Enter user email' type='text' />
                    <ErrorMessage name='email'>
                        {errorMsg => <div className={styles.error}>{errorMsg}</div>}
                    </ErrorMessage>
                </div>
                <div className={styles.fieldWrapper}>
                    <label className={styles.label} htmlFor='password'>Password</label>
                    <Field className={styles.field} id='password' name='password' placehodler='Enter user password' type='password' />
                    <ErrorMessage name='password'>
                        {errorMsg => <div className={styles.error}>{errorMsg}</div>}
                    </ErrorMessage>
                </div>
                <div className={styles.formChangeText}>
                    {isSignInForm ? 'Not a user yet?' : 'Already user?'}
                    <Button className={styles.formChangeButton} onClick={onFormTypeChange}>
                        {isSignInForm ? 'Sign-up!' : 'Sign-In!'}
                    </Button>
                </div>
                <div className={styles.buttons}>
                    <Button className={styles.linkButton} onClick={handleClose}>Cancel</Button>
                    <Button type="submit">{isSignInForm ? 'Log-in' : 'Confirm'}</Button>
                </div>
            </Form>

        </Formik>
    )
};

export { SignUpForm }
