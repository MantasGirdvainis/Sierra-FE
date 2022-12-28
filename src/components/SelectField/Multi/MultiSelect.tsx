import Select from 'react-select';

import styles from './MultiSelect.module.css';

type MultiSelectProps = {
    placeholder: string,
    options: { value: string, label: string }[]
};

const MultiSelect = ({ placeholder, options }: MultiSelectProps): JSX.Element => {

    return (
        <div className={styles.select}>
            <Select options={options} placeholder={placeholder} isMulti />
        </div>

    );
};

export default MultiSelect;
