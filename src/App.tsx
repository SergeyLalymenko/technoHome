import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './enums/routes';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
    </>
  );
}

export default App;
