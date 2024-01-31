import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import DefaultLayout from './Layouts/DefaultLayout';
import MoviesDetailPage from './Pages/MoviesDetailPage';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/movies/:movieId' element={<MoviesDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
