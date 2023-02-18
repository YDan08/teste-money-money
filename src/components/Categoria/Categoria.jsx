import { Col } from 'antd';
import { Divisoria } from './Categoria.styled';

export const Categoria = ({ children }) => {
  return (
    <Col span={20}>
      {children}
      <Divisoria />
    </Col>
  );
};

export default Categoria;
