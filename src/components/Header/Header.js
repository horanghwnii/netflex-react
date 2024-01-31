import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const handleClickLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <header className={styles.logo}>
      <Link to={'/'}>NETFLEX</Link>

      <nav>
        <ul>
          {!isLoggedIn ? (
            <li>
              <Link to='/sign-in'>로그인하기</Link>
            </li>
          ) : (
            <li>
              <button onClick={handleClickLogOut}>로그아웃</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
