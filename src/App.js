import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import DefaultLayout from './Layouts/DefaultLayout';
import MoviesDetailPage from './Pages/MoviesDetailPage';
import { AuthProvider } from './contexts/auth.context';
import UserInfoPage from './Pages/UserInfoPage';
import { ProfileProvider } from './contexts/profile.context';

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/user-info' element={<UserInfoPage />} />
            <Route path='/movies/:movieId' element={<MoviesDetailPage />} />
          </Route>
        </Routes>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
