/* eslint-disable react/prop-types */
import { RightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  BotaoSeta,
  CnpjEmpresa,
  ContainerSolicitacao,
  DadosSolicitacao,
  TituloEmpresa,
  ValorSolicitado,
} from './Solicitacao.styled';
import routes from '../../utils/routes';

export const Solicitacao = ({
  nomeEmpresa,
  cnpjEmpresa,
  valorSolicitado,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <ContainerSolicitacao>
      <Row justify="space-between" align="middle">
        <Col span={20}>
          <DadosSolicitacao>
            <TituloEmpresa>{nomeEmpresa}</TituloEmpresa>
            <CnpjEmpresa>{cnpjEmpresa}</CnpjEmpresa>
            <ValorSolicitado>R$ {valorSolicitado}</ValorSolicitado>
          </DadosSolicitacao>
        </Col>

        <BotaoSeta
          shape="circle"
          icon={<RightOutlined />}
          onClick={() => navigate(routes.details, { state: { id } })}
        />
      </Row>
    </ContainerSolicitacao>
  );
};

export default Solicitacao;
