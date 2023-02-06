import { Formik, Form } from 'formik';

import TextInputField from '../TextInputField/TextInputField';
import SingleSelectField from '../SelectField/Single/SingleSelectField';
import MultiSelectField from '../SelectField/Multi/MultiSelectField';
import Button from '../Button/Button';
import styles from './MoviesListFilter.module.css';

type Option = {
    label: string;
    value: string;
}

type MovieListFilterProps = {
    onFilterSubmit: (values: MovieListFilterFormValues) => void;
    onFilterReset: (values: MovieListFilterFormValues) => void;
    initialValues: MovieListFilterFormValues;
    genreOptions: Option[];
    sortOptions: Option[];
};

export type MovieListFilterFormValues = {
    title: string;
    genres: string[];
    sort: string;
};

const MoviesListFilter = ({ onFilterSubmit, onFilterReset, initialValues, genreOptions, sortOptions }: MovieListFilterProps): JSX.Element => {
    return (
        <Formik initialValues={initialValues} onReset={onFilterReset} onSubmit={onFilterSubmit}>
            {({ resetForm }) => {
                return (
                    <>
                        <Form className={styles.form}>
                            <TextInputField id='title' name='title' placeholder='Enter movie title' />
                            <MultiSelectField className={styles.selectField} id='genres' name='genres' options={genreOptions} placeholder='Select genre' />
                            <SingleSelectField className={styles.selectField} id='sort' name='sort' options={sortOptions} placeholder='Select sorting' />
                            <Button className={styles.button} type='submit'>
                                Submit
                            </Button>
                            <Button className={styles.button} onClick={resetForm}>
                                Reset
                            </Button>
                        </Form>
                    </>
                );
            }}
        </Formik>
    );
};

export default MoviesListFilter;
