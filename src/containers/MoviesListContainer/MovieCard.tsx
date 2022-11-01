import { StarIcon } from 'components/Icons';

import { Movie } from '../../api/movies/types';
import styles from './MovieCard.module.css';


const MovieCard = ({ title, voteAverage, releaseDate, posterPath }: Movie): JSX.Element => {
    return (
        <div className={styles.movieCardWrapper}>
            <img alt={`${title}-movie-title`} className={styles.movieImage} loading='lazy' src={posterPath} />
                <div className={styles.movieInfoWrapper}>
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
    )
}

export default MovieCard;