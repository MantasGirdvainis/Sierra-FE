import { FieldProps } from 'formik';
import { useState, useEffect } from 'react';

import SingleSelectFieldStateless, { SingleSelectFieldStatelessProps, Option } from './SingleSelectFieldStateless';

const SingleSelectFieldAdapter = ({ className, id, field, form, options, ...rest }: SingleSelectFieldStatelessProps & FieldProps): JSX.Element => {
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
      <SingleSelectFieldStateless {...rest} id={id} options={options} value={fieldSelectValue} onChange={handleChange} />
    </div>
  );
};

export default SingleSelectFieldAdapter;
