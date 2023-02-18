import { Route, Routes } from 'react-router-dom';
import Details from '../pages/Details/Details';
import { Home } from '../pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default Router;
