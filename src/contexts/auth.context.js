import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  isLoggedIn: false,
  username: 'udemy',
  password: 'udemy',
  signIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext(initialValue);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    if (!username || !password)
      return alert('아이디 또는 비밀번호를 입력해주세요.');

    if (
      username === initialValue.username &&
      password === initialValue.password
    ) {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('잘못 입력하셨습니다.');
    }

    setUsername('');
    setPassword('');
  };

  const logOut = () => setIsLoggedIn(false);

  const value = {
    isLoggedIn,
    // setIsLoggedIn,
    signIn,
    logOut,
    username,
    setUsername,
    password,
    setPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
