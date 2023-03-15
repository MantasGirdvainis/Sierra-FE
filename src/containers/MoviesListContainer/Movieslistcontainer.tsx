import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loader from 'components/Loader/loader';
import { useSearchParams } from 'react-router-dom';
import MoviesListFilter from 'components/MoviesListFilter/MoviesListFilter';
import { getPersonalMovies } from 'api/personalMovies/personalMoviesLib';
import { useProfile } from 'providers/ProfileProvider';

import { getGenres } from '../../api/genres/genres';
import { getSortOptions } from '../../api/sortOptions/sortOptions';
import Pagination from '../../components/Pagination/pagination';
import styles from './MoviesListContainer.module.css';
import MovieCard from './MovieCard';
import { MovieListFilterFormValues } from '../../components/MoviesListFilter/MoviesListFilter';



const MoviesListContainer = (): JSX.Element => {
  const { isLoggedIn } = useProfile();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieFilter = { title: searchParams.get('title') || '', genres: searchParams.getAll('genres') || [], sort: searchParams.get('sort') || '' };
  const page = parseInt(searchParams.get('page') || '1');
  const { isLoading, isFetching, data, refetch } = useQuery(['movies', page, movieFilter], () => getMovies(page, movieFilter));
  const { data: genres, isLoading: loadingGenres } = useQuery(['genres'], getGenres);
  const { data: sortOptions, isLoading: loadingSortOptions } = useQuery(['sortOptions'], getSortOptions);


  const {
    data: personalMovies,
    isLoading: loadingPersonalMovies,
    isFetching: fetchingPersonalMovies,
    refetch: refetchMyMovies,
  } = useQuery(['personal-movies'], getPersonalMovies, { enabled: isLoggedIn });

  const myMoviesIds = personalMovies?.movies.map((movie) => ({ movieId: movie.movieId, _id: movie._id }));


  const mappedSortOptions = sortOptions?.map((sortOption) => ({ label: sortOption.name, value: sortOption.code })) || [];

  const genreOptions = genres?.map((genre) => ({ label: genre.name, value: `${genre.id}` })) || [];

  const handleMovieListFilter = (values: MovieListFilterFormValues) => {
    setSearchParams({ ...values, page: '1' });
  };


  const handleMovieListFilterReset = () => {
    setSearchParams({ page: `${page}` });
  };

  const handleMovieRefetch = () => {
    refetch();
    refetchMyMovies();
  };


  return (
    <>
      <MoviesListFilter
        genreOptions={genreOptions}
        initialValues={movieFilter}
        sortOptions={mappedSortOptions}
        onFilterReset={handleMovieListFilterReset}
        onFilterSubmit={handleMovieListFilter}
      />
      <div style={{ marginBottom: 'auto' }}>
        <div className={styles.movieListContainer}>
          {isLoading || isFetching || loadingGenres || loadingSortOptions || loadingPersonalMovies || fetchingPersonalMovies ? (
            <Loader />
          ) : (
            data?.movies.map((movie, index) => (
              <MovieCard key={`movie-${movie._id}-${index}`} movie={movie} myMoviesIds={myMoviesIds} onFavoriteClick={handleMovieRefetch} />
            ))
          )}
        </div>
      </div>
      <Pagination currentPage={page} siblingCount={1} totalCount={data?.totalPages || 0} onPageChange={(page) => setSearchParams({ page: `${page}` })} />
    </>
  );
};

export default MoviesListContainer;
