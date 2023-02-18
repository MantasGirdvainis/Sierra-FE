import { Modal } from "../Modal";
import { SignUpForm } from "./SignUpForm";



const SignUpmodal = (): JSX.Element => {

    return (
        <>
            <Modal headerText='Please sign-up' isOpen={false}  >
                <SignUpForm />
            </Modal>
        </>
    )
};

export { SignUpmodal };
