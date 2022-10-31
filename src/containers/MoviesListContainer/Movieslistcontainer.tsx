import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loader from 'components/Loader/loader';

import styles from './MoviesListContainer.module.css';

const MoviesListContainer = (): JSX.Element => {
  const { data } = useQuery('movies', getMovies)
  
  if (data) {
    return <div className={styles.movieListContainer}>{JSON.stringify(data)}</div>;
  } 

  return  <Loader />;
 
};

export default MoviesListContainer;