import styles from './TextInputFieldStateless.module.css'

type Props = {
    placeholder: string
}

const TextInputFieldStateless = ({placeholder}:Props):JSX.Element => {

    return (
        <div>
        <input className={styles.inputText} placeholder={placeholder} type="text"/>
        </div>
    )
};

export default TextInputFieldStateless;