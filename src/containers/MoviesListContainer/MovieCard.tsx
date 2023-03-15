import { StarIcon } from 'components/Icons';
import { Link, generatePath } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postPersonalMovie, deletePersonalMovie } from 'api/personalMovies/personalMoviesLib';
import Favorite from 'components/Favorite/Favorite';
import { useProfile } from 'providers/ProfileProvider';

import { Movie } from '../../api/movies/types';
import styles from './MovieCard.module.css';

type MovieCardProps = {
    myMoviesIds?: { movieId: number; _id: string | undefined }[];
    movie: Movie;
    onFavoriteClick?: () => void;
};

const MovieCard = ({ movie, myMoviesIds, onFavoriteClick }: MovieCardProps): JSX.Element => {

    const { _id, posterPath, releaseDate, title, voteAverage, movieId } = movie;
    const { isLoggedIn } = useProfile();
    const { mutate: addPersonalMovie } = useMutation(postPersonalMovie, { onSuccess: onFavoriteClick });
    const { mutate: removePersonalMovie } = useMutation(deletePersonalMovie, { onSuccess: onFavoriteClick });
    const myMovieId = _id || myMoviesIds?.find((myMovieId) => myMovieId.movieId === movieId)?._id;
    const movieLink = generatePath('/movie/:id', { id: `${movieId}` });

    const handleMovieAction = async () => {
        myMovieId ? await removePersonalMovie(myMovieId) : await addPersonalMovie(movie);
    };

    return (
        <div className={styles.movieCardWrapper}>
            <Link to={movieLink}>
                <img alt={`${title}-movie-title`} className={styles.movieImage} loading='lazy' src={posterPath} />
            </Link>
            <div className={styles.movieInfoWrapper}>
                <div>
                    <p className={styles.movieInfoParagraph}>
                        <span className={styles.voteAverage}><StarIcon className={styles.icon} />{voteAverage}</span>
                    </p>
                    <p>
                        <span className={styles.filmTitle}>{title}</span>
                    </p>
                </div>
                <p className={styles.releaseDate}>
                    <span>{releaseDate}</span>
                    {isLoggedIn && <Favorite id={myMovieId} onClick={handleMovieAction} />}
                </p>
            </div>
        </div>
    )
}

export default MovieCard;
