import React, { useEffect } from 'react';
import styles from './MoviesDetailPage.module.css';
import { useParams } from 'react-router-dom';

// const nowPlaying =
//   'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR';

// const topRated =
//   'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR';

// -- 방법1에 필요 --
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SYgTW92CkzlWhUcTXHe5m8wIx6jYWHxLcrTLcMwFbQ4',
  },
};

export default function MoviesDetailPage() {
  const { movieId } = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie${movieId}`, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2 className={styles.title}>
        연재 보여지고 있는 페이지의 영화 아이디는 {movieId}.
      </h2>
    </div>
  );
}
