import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import MovieList from '../../components/MovieList';
import api from '../../api/api';

export default function HomePage({ isLoggedIn }) {
  // -- 방법3 --
  const [movies, setMovies] = useState({ nowPlaying: [], topRated: [] });

  useEffect(() => {
    Promise.all([
      api.movies.getMovies('nowPlaying'),
      api.movies.getMovies('topRated'),
    ]).then(([nowPlaying, topRated]) => setMovies({ nowPlaying, topRated }));
  }, []);

  return (
    <div className={styles.App}>
      <MovieList
        sectionTitle={'현재 상영작'}
        nowPlayingMovies={movies.nowPlaying}
        isLoggedIn={isLoggedIn}
      />
      <MovieList
        sectionTitle={'평점이 높은 영화'}
        nowPlayingMovies={movies.topRated}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}
