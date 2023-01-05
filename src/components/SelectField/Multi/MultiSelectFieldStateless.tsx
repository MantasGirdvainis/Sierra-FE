import Select from 'react-select';

import styles from './MultiSelectFieldStateless.module.css';

export type MultiSelectFieldStatelessProps = {
    options: { value: string, label: string }[],
    className?: string,
    id: string,
    name: string,

};

const MultiSelectFieldStateless = ({ options, className, id, name }: MultiSelectFieldStatelessProps): JSX.Element => {

    return (
        <div className={className}>
            <Select className={styles.select} options={options} id={id} name={name} isMulti />
        </div>

    );
};

export default MultiSelectFieldStateless;
