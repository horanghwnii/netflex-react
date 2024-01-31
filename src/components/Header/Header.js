import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.logo}>
      <Link to={'/'}>NETFLEX</Link>

      <nav>
        <ul>
          <Link to='/sign-in'>로그인하기</Link>
        </ul>
      </nav>
    </header>
  );
}
