import styles from './TextInputFieldStateless.module.css'

type Props = {
    placeholder: string
}

const TextInputFieldStateless = ({placeholder}:Props):JSX.Element => {

    return (
        <input className={styles.inputText} placeholder={placeholder} type="text"/>
    )
};

export default TextInputFieldStateless;
