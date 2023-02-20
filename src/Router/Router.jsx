import { Route, Routes } from 'react-router-dom';
import AddSolicitacao from '../pages/AddSolicitacao';
import Details from '../pages/Details';
import { Home } from '../pages/Home';
import EditSolicitacao from '../pages/EditSolicitacao';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/add-solicitacao" element={<AddSolicitacao />} />
      <Route path="/edit-solicitacao" element={<EditSolicitacao />} />
    </Routes>
  );
};

export default Router;
