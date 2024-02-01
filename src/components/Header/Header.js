import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';
import { useProfile } from '../../contexts/profile.context';

export default function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickname } = useProfile();

  return (
    <header className={styles.logo}>
      <Link to={'/'}>NETFLEX</Link>

      <nav>
        <ul>
          {!isLoggedIn ? (
            <li>
              <Link to='/sign-in'>로그인</Link>
            </li>
          ) : (
            <>
              <li
                style={{
                  color: 'red',
                  fontSize: 21,
                  fontWeight: 700,
                  marginRight: 5,
                }}
              >
                {nickname}
              </li>
              <li>
                <Link to='/user-info'>마이페이지</Link>
              </li>
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
