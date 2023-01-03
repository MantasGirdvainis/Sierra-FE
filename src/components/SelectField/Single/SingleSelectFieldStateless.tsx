import Select from 'react-select';

import styles from './SingleSelectFieldStateless.module.css';

export type SingleSelectFieldStatelessProps = {
    options: { value: string, label: string }[],
    className?: string,
    id: string,
    name: string,

};

const SingleSelectFieldStateless = ({ options, className, id, name }: SingleSelectFieldStatelessProps): JSX.Element => {

    return (
        <div className={className}>
            <Select className={styles.select} options={options} id={id} name={name} />
        </div>

    );
};

export default SingleSelectFieldStateless;
