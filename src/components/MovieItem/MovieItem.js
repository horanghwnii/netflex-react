import React from 'react';
import styles from './MovieItem.module.scss';

const imageOrigin = 'https://image.tmdb.org/t/p/w500';

export default function MovieItem({ title, backdrop_path }) {
  return (
    <div className={styles.movie_item}>
      <img src={`${imageOrigin}${backdrop_path}`} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
