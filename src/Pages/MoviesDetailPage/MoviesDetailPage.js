import React, { useEffect, useState } from 'react';
import styles from './MoviesDetailPage.module.css';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

const imageOrigin = 'https://image.tmdb.org/t/p/w500';

export default function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => setMovie(movie));
  }, []);

  // 이거 왜 넣어야함
  if (!movie) {
    return null;
  }

  console.log(movie);

  return (
    <div>
      <div className={styles.movie_wrapper}>
        <img src={`${imageOrigin}${movie.backdrop_path}`} alt={movie.title} />
        <div className={styles.movie_desc}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
