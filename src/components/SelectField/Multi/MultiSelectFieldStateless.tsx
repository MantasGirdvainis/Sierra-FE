import Select, { OnChangeValue } from 'react-select';

import styles from './MultiSelectFieldStateless.module.css';

export type MultiSelectFieldStatelessProps = {
  options: { value: string, label: string }[],
  className?: string,
  id: string,
  name: string,
  placeholder: string,
  onChange?: (value: string | string[]) => void;
};

export type Option = { label: string; value: string };

const MultiSelectFieldStateless = ({ options, className, id, name, placeholder, onChange }: MultiSelectFieldStatelessProps): JSX.Element => {

  const handleChange = (value: OnChangeValue<Option>) => {
    if (Array.isArray(value)) {
      onChange?.(value.map((option) => option.value));
    }

    if (value && 'value' in value) {
      onChange?.(value.value);
    }
  };

  return (
    <div className={className}>
      <Select className={styles.select} id={id} name={name} options={options} placeholder={placeholder} isMulti onChange={handleChange} />
    </div>

  );
};

export default MultiSelectFieldStateless;
