import { Col } from 'antd';
import { ContainerCategoria, Divisoria } from './Categoria.styled';

export const Categoria = ({ children }) => {
  return (
    <Col span={20}>
      <ContainerCategoria>{children}</ContainerCategoria>
      <Divisoria />
    </Col>
  );
};

export default Categoria;
