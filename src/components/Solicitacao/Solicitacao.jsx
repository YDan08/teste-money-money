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
          icon={<RightOutlined />}
          onClick={() => navigate('/details', { state: { id } })}
        />
      </Row>
    </ContainerSolicitacao>
  );
};

export default Solicitacao;
