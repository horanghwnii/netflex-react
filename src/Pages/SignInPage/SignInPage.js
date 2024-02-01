import React, { useContext, useState } from 'react';
import styles from './SignInPage.module.scss';
import { useAuth } from '../../contexts/auth.context';
import { Link } from 'react-router-dom';

export default function SignInPage() {
  const { isLoggedIn, username, setUsername, password, setPassword, signIn } =
    useAuth();

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <div>
      {isLoggedIn ? (
        <div style={{ color: 'white' }}>로그인 성공</div>
      ) : (
        <div className={styles.sign_in_page}>
          <h2>SIGN IN</h2>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn}>로그인하기</button>
        </div>
      )}
    </div>
  );
}
