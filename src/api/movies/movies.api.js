// // const nowPlaying =
// //   'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR';

// // const topRated =
// //   'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR';

// // -- 방법1에 필요 --
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SYgTW92CkzlWhUcTXHe5m8wIx6jYWHxLcrTLcMwFbQ4',
//   },
// };

// const getMovies = async (type) => {
//   const endpoints = {
//     nowPlaying:
//       'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR',
//     topRated:
//       'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR',
//   };

//   const response = await fetch(endpoints[type], options);
//   const data = await response.json();
//   const movies = data.results;

//   return movies;
// };

// const getMovie = async (movieId) => {
//   const endpoint = `https://api.themoviedb.org/3/movie${movieId}?language=ko-KR`;
//   const response = await fetch(endpoint, options);
//   const data = await response.json();

//   return data;
// };

// const moviesAPI = {
//   // nowPlaying,
//   // topRated,
//   // options,
//   getMovies,
//   getMovie,
// };

// export default moviesAPI;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SYgTW92CkzlWhUcTXHe5m8wIx6jYWHxLcrTLcMwFbQ4',
  },
};
const getMovies = async (type) => {
  const endpoints = {
    nowPlaying:
      'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&region=KR&page=1',
    topRated:
      'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&page=1',
  };

  const response = await fetch(endpoints[type], options);
  const data = await response.json();
  const movies = data.results;

  return movies;
};

const getMovie = async (movieId) => {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`;
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};

const moviesAPI = {
  getMovies,
  getMovie,
};

export default moviesAPI;
