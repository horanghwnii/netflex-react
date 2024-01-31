import React, { useState } from 'react';
import styles from './SignInPage.module.scss';

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert('아이디 또는 비밀번호를 입력해주세요.');

    if (username === 'udemy' && password === 'udemy') {
      setIsLoggedIn(true);
    }

    if (!username === 'udemy' || !password === 'udemy') {
      alert('잘못 입력하셨습니다.');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>로그인 성공</div>
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
          <button onClick={handleClickSignIn}>로그인하기</button>
        </div>
      )}
    </div>
  );
}
