import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import { MyMoviesLogo } from 'components/Icons';

import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data: healthy } = useQuery('status', fetchStatus);
  return (
    <>
      <MyMoviesLogo className={styles.icon} />
      <p>My Movies</p>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </>
  );
};

export default MoviesListContainer;