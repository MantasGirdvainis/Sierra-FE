import Select from 'react-select';

import styles from './SingleSelect.module.css';

type SingleSelectProps = {
    placeholder: string,
    options: { value: string, label: string }[]
};

const SingleSelect = ({ placeholder, options }: SingleSelectProps): JSX.Element => {

    return (
        <div className={styles.select}>
            <Select options={options} placeholder={placeholder} />
        </div>

    );
};

export default SingleSelect;
