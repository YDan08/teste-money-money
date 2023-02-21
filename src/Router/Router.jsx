import { Route, Routes } from 'react-router-dom';
import AddSolicitacao from '../pages/AddSolicitacao';
import Details from '../pages/Details';
import { Home } from '../pages/Home';
import EditSolicitacao from '../pages/EditSolicitacao';
import routes from '../utils/routes';

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.details} element={<Details />} />
      <Route path={routes.addSolicitacao} element={<AddSolicitacao />} />
      <Route path={routes.editSolicitacao} element={<EditSolicitacao />} />
    </Routes>
  );
};

export default Router;
