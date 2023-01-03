import { FieldProps } from 'formik';

import MultiSelectFieldStateless, { MultiSelectFieldStatelessProps } from './MultiSelectFieldStateless';

const MultiSelectFieldAdapter = ({ className, id, field, form, options, ...rest }: MultiSelectFieldStatelessProps & FieldProps): JSX.Element => {
    return (
        <div className={className}>
            <MultiSelectFieldStateless {...rest} id={id} options={options} />
        </div>
    );
};

export default MultiSelectFieldAdapter;
