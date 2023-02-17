/* eslint-disable react/prop-types */
import { RightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import {
  BotaoSeta,
  CnpjEmpresa,
  ContainerSolicitacao,
  DadosSolicitacao,
  TituloEmpresa,
  ValorSolicitado,
} from './Solicitacao.styled';

export const Solicitacao = ({ nomeEmpresa, cnpjEmpresa, valorSolicitado }) => {
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
        <BotaoSeta icon={<RightOutlined />} />
      </Row>
    </ContainerSolicitacao>
  );
};

export default Solicitacao;
