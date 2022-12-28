import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loader from 'components/Loader/loader';
import { useSearchParams } from 'react-router-dom';

import Pagination from '../../components/Pagination/pagination';
import styles from './MoviesListContainer.module.css';
import MovieCard from './MovieCard';

const MoviesListContainer = (): JSX.Element => {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  const { isLoading, isFetching, data } = useQuery(['movies', page], () => getMovies(page))

  if (isLoading || isFetching) {
    return <Loader />;
  } 

    const renderMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.id}  {...movie}/>) 
  }

  return (
    <>
    <div className={styles.movieListContainer}>{renderMovies()}</div>
    <Pagination  currentPage={page}  siblingCount={1} totalCount={data?.totalPages || 0} onPageChange={(page) => setSearchParams({page: `${page}`})}  />
    </>
  )
  };

export default MoviesListContainer;