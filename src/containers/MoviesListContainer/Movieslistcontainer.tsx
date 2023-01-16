import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loader from 'components/Loader/loader';
import { useSearchParams } from 'react-router-dom';
import MoviesListFilter from 'components/MoviesListFilter/MoviesListFilter';

import { getGenres } from '../../api/genres/genres';
import { getSortOptions } from '../../api/sortOptions/sortOptions';
import Pagination from '../../components/Pagination/pagination';
import styles from './MoviesListContainer.module.css';
import MovieCard from './MovieCard';
import { MovieListFilterFormValues } from '../../components/MoviesListFilter/MoviesListFilter';



const MoviesListContainer = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFilter = { title: searchParams.get('title') || '', genres: searchParams.getAll('genres') || [], sort: searchParams.get('sort') || '' };
  const page = parseInt(searchParams.get('page') || '1');
  const { isLoading, isFetching, data } = useQuery(['movies', page, movieFilter], () => getMovies(page, movieFilter));
  const { data: genres, isLoading: loadingGenres } = useQuery(['genres'], getGenres);
  const { data: sortOptions, isLoading: loadingSortOptions } = useQuery(['sortOptions'], getSortOptions);
  

  
  const genreOptions = genres?.genres.map((genre) => ({ label: genre.name, value: `${genre.id}` })) || [];
  const mappedSortOptions = sortOptions?.map((sortOption) => ({ label: sortOption.name, value: sortOption.code })) || [];

  

  const handleMovieListFilter = (values: MovieListFilterFormValues) => {
    setSearchParams({ ...values, page: '1' });
  };


  const handleMovieListFilterReset = () => {
    setSearchParams({ page: `${page}` });
  };

  if (isLoading || isFetching || loadingGenres || loadingSortOptions) {
    return <Loader />;
  }

  const renderMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.id}  {...movie} />)
  }

  return (
    <>
      <MoviesListFilter genreOptions={genreOptions} initialValues={movieFilter} sortOptions={mappedSortOptions} onFilterReset={handleMovieListFilterReset} onFilterSubmit={handleMovieListFilter} />
      <div className={styles.movieListContainer}>{renderMovies()}</div>
      <Pagination currentPage={page} siblingCount={1} totalCount={data?.totalPages || 0} onPageChange={(page) => setSearchParams({ page: `${page}` })} />
    </>
  )
};

export default MoviesListContainer;
