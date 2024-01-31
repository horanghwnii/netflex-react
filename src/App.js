import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import DefaultLayout from './Layouts/DefaultLayout';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route
          path='/movies/:movieId'
          element={<div style={{ color: 'white' }}>이건 영화 페이지에요.</div>}
        />
      </Route>
    </Routes>
  );
}

export default App;
