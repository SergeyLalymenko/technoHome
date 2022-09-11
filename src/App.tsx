import { Route, Routes } from 'react-router-dom';
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
      </Routes>
    </>
  );
}

export default App;
