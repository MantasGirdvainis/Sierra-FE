import { FieldProps } from 'formik';
import { useState, useEffect } from 'react';

import MultiSelectFieldStateless, { MultiSelectFieldStatelessProps, Option } from './MultiSelectFieldStateless';

const MultiSelectFieldAdapter = ({ className, id, field, form, options, ...rest }: MultiSelectFieldStatelessProps & FieldProps): JSX.Element => {

  const [fieldSelectValue, setFieldSelectValue] = useState<Option | Option[] | undefined>(undefined);
  const { name, value } = field;
  const { setFieldValue } = form;

  useEffect(() => {
    const valueToSet = options.filter((option) => value.includes(option?.value));
    setFieldSelectValue(valueToSet);
  }, [value]);

  const handleChange = (selectValue: string | string[]) => {
    setFieldValue(name, selectValue);
  };

  return (
    <div className={className}>
      <MultiSelectFieldStateless {...rest} id={id} options={options} value={fieldSelectValue} onChange={handleChange} />
    </div>
  );
};

export default MultiSelectFieldAdapter;
