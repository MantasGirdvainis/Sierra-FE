import { Field } from 'formik';

import SingleSelectFieldAdapter from './SingleSelectFieldAdapter';
import { SingleSelectFieldStatelessProps } from './SingleSelectFieldStateless';


const SingleSelectField = (props: SingleSelectFieldStatelessProps): JSX.Element => {
    return <Field {...props} component={SingleSelectFieldAdapter} />

};

export default SingleSelectField;
