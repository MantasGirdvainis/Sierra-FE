import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loader from 'components/Loader/loader';

import styles from './MoviesListContainer.module.css';
import MovieCard from './MovieCard';

const MoviesListContainer = (): JSX.Element => {
  const { isLoading, isFetching, data } = useQuery('movies', getMovies)
  
  if (isLoading || isFetching) {
    return <Loader />;
  } 

  const renderMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.id}  {...movie}/>)
  }

  return (
    <div className={styles.movieListContainer}>{renderMovies()}</div>

  )
  };

export default MoviesListContainer;