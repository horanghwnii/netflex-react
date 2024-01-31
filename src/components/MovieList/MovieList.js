import React from 'react';
import styles from './MovieList.module.scss';
import MovieItem from '../MovieItem';

export default function MovieList({ sectionTitle, nowPlayingMovies }) {
  return (
    <div className={styles.movie_list}>
      <h2>{sectionTitle}</h2>
      <div className={styles.movie_item_wrapper}>
        {nowPlayingMovies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            backdrop_path={movie.backdrop_path}
          />
        ))}
      </div>
    </div>
  );
}