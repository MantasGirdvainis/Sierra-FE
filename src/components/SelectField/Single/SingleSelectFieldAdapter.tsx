import { FieldProps } from 'formik';

import SingleSelectFieldStateless, { SingleSelectFieldStatelessProps } from './SingleSelectFieldStateless';

const SingleSelectFieldAdapter = ({ className, id, field, form, options, ...rest }: SingleSelectFieldStatelessProps & FieldProps): JSX.Element => {
    return (
        <div className={className}>
            <SingleSelectFieldStateless {...rest} id={id} options={options} />
        </div>
    );
};

export default SingleSelectFieldAdapter;
