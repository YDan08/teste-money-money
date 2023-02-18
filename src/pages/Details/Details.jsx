import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LayoutDefault from '../../components/LayoutDefault';
import Categoria from '../../components/Categoria';
import Info from '../../components/Info';
import { api } from '../../utils/api';

export const Details = () => {
  const { state } = useLocation();
  const [solicitacao, setSolicitacao] = useState([]);
  useEffect(() => {
    (async () => {
      const dados = await api.get(`/solicitacoes/${state.id}`);
      setSolicitacao(dados.data);
    })();
  }, []);

  return (
    <LayoutDefault>
      <Row justify="center">
        <Col span={20}>
          <Link to="/">
            <Button
              icon={<ArrowLeftOutlined />}
              type="text"
              style={{ padding: 2 }}
            >
              <Typography.Text strong>Voltar</Typography.Text>
            </Button>
          </Link>
        </Col>
        <Col span={20}>
          <Typography.Title level={4}>Detalhes</Typography.Title>
        </Col>
        <Categoria>
          <Typography.Title level={5}>
            {solicitacao.nomeEmpresa}
          </Typography.Title>
        </Categoria>
        <Col span={20}>
          <Info
            categoria="Valor solicitado"
            valor={`R$ ${solicitacao.valorSolicitado}`}
          />
          <Info
            categoria="Faturamento anual"
            valor={`R$ ${solicitacao.faturamentoAnual}`}
          />
        </Col>
      </Row>
    </LayoutDefault>
  );
};

export default Details;
