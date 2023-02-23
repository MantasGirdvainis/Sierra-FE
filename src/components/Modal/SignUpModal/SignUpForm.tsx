import { signUp } from "api/auth/auth";
import { SignUpCredentials } from "api/auth/types";
import Button from "components/Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import styles from './signUpForm.module.css';

type SignUpProps = {
    handleClose: () => void
}

const SignUpForm = ({ handleClose }: SignUpProps): JSX.Element => {

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

    const handleSubmit = (values: SignUpCredentials) => {
        signUp(values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
            <Form >
                <div className={styles.fieldWrapper}>
                    <label className={styles.label} htmlFor='name'>Full name</label>
                    <Field className={styles.field} id='name' name='name' placehodler='Enter full name' type='text' />
                    <ErrorMessage name='name'>
                        {errorMsg => <div className={styles.error}>{errorMsg}</div>}
                    </ErrorMessage>
                </div>
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
                <div className={styles.buttons}>
                    <Button className={styles.linkButton} onClick={handleClose}> Cancel</Button>
                    <Button type="submit"> Confirm</Button>
                </div>
            </Form>

        </Formik>
    )
};

export { SignUpForm }
