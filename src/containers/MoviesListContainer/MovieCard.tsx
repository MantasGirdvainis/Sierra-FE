import { StarIcon } from 'components/Icons';
import { Link, generatePath } from 'react-router-dom';
import { RouteKey } from 'navigation/routes';

import { Movie } from '../../api/movies/types';
import styles from './MovieCard.module.css';


const MovieCard = ({ title, voteAverage, releaseDate, posterPath, movieId }: Movie): JSX.Element => {

    const movieLink = generatePath(RouteKey.Movie, { id: `${movieId}` });

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
                <p className={styles.voteAverage}>
                    <span>{releaseDate}</span>
                </p>
            </div>
        </div>
    )
}

export default MovieCard;