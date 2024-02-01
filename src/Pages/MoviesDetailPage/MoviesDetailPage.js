import React, { useEffect, useState } from 'react';
import styles from './MoviesDetailPage.module.css';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import Button from '../../components/Button';
import { useProfile } from '../../contexts/profile.context';
import { useAuth } from '../../contexts/auth.context';

const imageOrigin = 'https://image.tmdb.org/t/p/w500';

export default function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { isLoggedIn } = useAuth();
  const { likedMovies, setLikedMovies, removeLikedMovie } = useProfile();

  const [isLiked, setIsLiked] = useState(false);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
      return;
    }

    if (!likedMovies.some((it) => it.id === movie.id)) {
      setLikedMovies([
        ...likedMovies,
        { id: movie.id, title: movie.title, poster_path: movie.poster_path },
      ]);
    }
  }, [isLiked]);

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => setMovie(movie));
  }, []);

  // 이거 왜 넣어야함
  if (!movie) {
    return null;
  }

  const handleClickLiked = () => setIsLiked(!isLiked);

  const isLikedItem = likedMovies.some((it) => it.id === movie.id);

  const handleClickLikedRemove = (targetId) => {
    removeLikedMovie(targetId);
  };

  return (
    <div>
      <div className={styles.movie_wrapper}>
        <img src={`${imageOrigin}${movie.poster_path}`} alt={movie.title} />
        <div className={styles.movie_desc}>
          <ul>
            {movie.genres.map((it) => (
              <li key={it['id']}>{it['name']}</li>
            ))}
          </ul>
          <div>
            <h2>{movie.title}</h2>
            {isLoggedIn &&
              (!isLikedItem ? (
                <Button
                  onClick={handleClickLiked}
                  classes={{ backgroundColor: 'black' }}
                />
              ) : (
                <Button
                  onClick={() => handleClickLikedRemove(movie.id)}
                  classes={{ color: 'red' }}
                />
              ))}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
