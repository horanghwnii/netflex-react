import { createContext, useContext, useState } from 'react';

const initialValue = {
  nickname: '그만 헤어지자 이제 제발',
  likedMovies: [],
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState('제발 그만좀 보자');
  const [likedMovies, setLikedMovies] = useState([]);

  const removeLikedMovie = (targetId) => {
    setLikedMovies(likedMovies.filter((movie) => movie.id !== targetId));
  };

  const value = {
    nickname,
    setNickname,
    likedMovies,
    setLikedMovies,
    likedMovieList: likedMovies,
    removeLikedMovie,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
