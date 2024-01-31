import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import MovieList from '../../components/MovieList';

const nowPlaying =
  'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR';

const topRated =
  'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR';

// -- 방법1에 필요 --
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SYgTW92CkzlWhUcTXHe5m8wIx6jYWHxLcrTLcMwFbQ4',
  },
};

// -- 방법2, 3에 필요 --
// async function getMovies(endpoint) {
//   const response = await fetch(endpoint);
//   const data = await response.json();
//   const movies = data.results;

//   return movies;
// }

export default function HomePage() {
  // -- 방법3 --
  // const [movies, setMovies] = useState({ nowPlaying: [], topRated: [] });

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    // Promise.all([getMovies(nowPlaying), getMovies(topRated)]).then(
    //   ([nowPlaying, topRated]) => setMovies({ nowPlaying, topRated })
    // );

    // -- 방법2에 필요 --
    // const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    // const [topRatedMovies, setTopRatedMovies] = useState([]);

    // -- 방법2 --
    // getMovies(nowPlaying).then((movies) => setMovies({ nowPlaying }));
    // getMovies(topRated).then((movies) => setMovies({ topRated }));

    // -- 방법1 --
    fetch(nowPlaying, options)
      .then((response) => response.json())
      .then((response) => setNowPlayingMovies(response.results))
      .catch((err) => console.error(err));

    fetch(topRated, options)
      .then((response) => response.json())
      .then((response) => setTopRatedMovies(response.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={styles.App}>
      <MovieList
        sectionTitle={'현재 상영작'}
        nowPlayingMovies={nowPlayingMovies}
      />
      <MovieList
        sectionTitle={'평점이 높은 영화'}
        nowPlayingMovies={topRatedMovies}
      />
    </div>
  );
}
