import { Field } from 'formik';

import MultiSelectFieldAdapter from './MultiSelectFieldAdapter';
import { MultiSelectFieldStatelessProps } from './MultiSelectFieldStateless';


const MultiSelectField = (props: MultiSelectFieldStatelessProps): JSX.Element => {
    return <Field {...props} component={MultiSelectFieldAdapter} />

};

export default MultiSelectField;
