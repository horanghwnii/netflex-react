import React, { useState } from 'react';
import styles from './UserInfoPage.module.scss';
import { useProfile } from '../../contexts/profile.context';
import Button from '../../components/Button';

const imageOrigin = 'https://image.tmdb.org/t/p/w500';

export default function UserInfoPage() {
  const { nickname, setNickname, likedMovieList, removeLikedMovie } =
    useProfile();

  const [isChange, setIsChange] = useState(false);
  const [nick, setNick] = useState(nickname);

  const handleClickChangeNickname = (e) => {
    setIsChange(false);
    setNickname(nick);
  };

  const handleClickRemove = (targetId) => {
    removeLikedMovie(targetId);
  };

  return (
    <div>
      <div className={styles.user_info_page}>
        <div className={styles.nickname_wrapper}>
          {!isChange ? (
            <>
              <input type='text' placeholder={nickname} disabled />
              <button onClick={() => setIsChange(true)}>수정하기</button>
            </>
          ) : (
            <>
              <input
                type='text'
                placeholder={nickname}
                onChange={(e) => setNick(e.target.value)}
              />
              <button onClick={handleClickChangeNickname}>저장하기</button>
            </>
          )}
        </div>
      </div>
      <h2 className={styles.like_movies_title}>사용자가 좋아한 영화</h2>
      <div className={styles.movie_list}>
        {likedMovieList.map((movie) => (
          <div key={movie.id} className={styles.liked_movie_item}>
            <img src={`${imageOrigin}${movie.poster_path}`} alt={movie.title} />
            <div>
              <h3>{movie.title}</h3>
              <Button onClick={() => handleClickRemove(movie.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
