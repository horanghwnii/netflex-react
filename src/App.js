import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import DefaultLayout from './Layouts/DefaultLayout';
import MoviesDetailPage from './Pages/MoviesDetailPage';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        element={
          <DefaultLayout
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      >
        <Route
          path='/'
          element={
            <HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path='/sign-in'
          element={
            <SignInPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path='/movies/:movieId' element={<MoviesDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
