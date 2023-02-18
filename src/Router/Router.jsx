import { Route, Routes } from 'react-router-dom';
import AddSolicitacao from '../pages/AddSolicitacao';
import Details from '../pages/Details/Details';
import { Home } from '../pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/add-solicitacao" element={<AddSolicitacao />} />
    </Routes>
  );
};

export default Router;
