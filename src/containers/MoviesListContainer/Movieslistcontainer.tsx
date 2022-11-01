import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loader from 'components/Loader/loader';

import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { isLoading, isError, data } = useQuery('movies', getMovies)
  
  if (isLoading) {
    return <Loader />;
  } 

  if (isError) {
    return <span>Error</span>
  }

  return <div className={styles.movieListContainer}>{JSON.stringify(data)}</div>;
 
};

export default MoviesListContainer;