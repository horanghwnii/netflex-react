import React from 'react';
import styles from './MovieItem.module.scss';
import { Link } from 'react-router-dom';

const imageOrigin = 'https://image.tmdb.org/t/p/w500';

export default function MovieItem({ id, title, backdrop_path, isLoggedIn }) {
  return (
    <Link to={`/movies/${id}`} className={styles.movie_item}>
      <img src={`${imageOrigin}${backdrop_path}`} alt={title} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>{title}</h3>
        {isLoggedIn && <button style={{ color: 'white' }}>좋아요</button>}
      </div>
    </Link>
  );
}
