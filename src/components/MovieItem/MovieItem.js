import React, { useEffect, useState } from 'react';
import styles from './MovieItem.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';
import { useProfile } from '../../contexts/profile.context';
import Button from '../Button';

const imageOrigin = 'https://image.tmdb.org/t/p/w500';

export default function MovieItem({ id, title, backdrop_path, poster_path }) {
  const { isLoggedIn } = useAuth();
  const { likedMovies, setLikedMovies, removeLikedMovie } = useProfile();

  const [isLiked, setIsLiked] = useState(false);
  const [isMount, setIsMount] = useState(false);

  const handleClickLiked = () => setIsLiked(!isLiked);

  const isLikedItem = likedMovies.some((movie) => movie.id === id);

  const handleClickLikedRemove = (targetId) => {
    removeLikedMovie(targetId);
  };

  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
      return;
    }

    if (!likedMovies.some((movie) => movie.id === id)) {
      setLikedMovies([
        ...likedMovies,
        { id: id, title: title, poster_path: poster_path },
      ]);
    }
  }, [isLiked]);

  return (
    <div className={styles.movie_item}>
      <Link to={`/movies/${id}`}>
        <img src={`${imageOrigin}${backdrop_path}`} alt={title} />
      </Link>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{title}</h3>
        {isLoggedIn &&
          (!isLikedItem ? (
            <Button
              onClick={handleClickLiked}
              classes={{ color: 'white', cursor: 'pointer' }}
            />
          ) : (
            <Button
              onClick={() => handleClickLikedRemove(id)}
              classes={{ color: 'red', cursor: 'pointer' }}
            />
          ))}
      </div>
    </div>
  );
}
