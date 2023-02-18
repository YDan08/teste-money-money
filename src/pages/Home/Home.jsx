import { Avatar, Badge, Button, Col, Row, Typography } from 'antd';
import { BellOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutDefault from '../../components/LayoutDefault';
import foto from '../../assets/foto.jpg';
import {
  ColUser,
  DivOportunidade,
  IconButton,
  InfoUser,
  InputSearch,
  Titulo,
} from './Home.styled';
import Solicitacao from '../../components/Solicitacao/Solicitacao';
import { api } from '../../utils/api';

export const Home = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    (async () => {
      const dados = await api.get('/solicitacoes');
      setSolicitacoes(dados.data);
    })();
  }, []);

  return (
    <LayoutDefault>
      <Row justify="center" gutter={[0, 12]}>
        <Col span={20}>
          <Row justify="space-between" align="middle">
            <ColUser span={20}>
              <Avatar size={64} src={foto} />
              <InfoUser>
                <Typography.Text strong>Seja bem-vindo</Typography.Text>
                <Typography.Text>Daniel Yamashita</Typography.Text>
              </InfoUser>
            </ColUser>

            <Badge dot color="orange">
              <Button icon={<BellOutlined />} type="text" size="middle" />
            </Badge>
          </Row>
        </Col>
        <Col span={20}>
          <DivOportunidade>
            <Titulo level={4}>Oportunidades</Titulo>
            <Link to="/add-solicitacao">
              <IconButton icon={<PlusOutlined style={{ fontSize: 8 }} />} />
            </Link>
          </DivOportunidade>
          <InputSearch placeholder="input search text" />
        </Col>
        <Col span={24}>
          <Row justify="center">
            {solicitacoes.length !== 0 ? (
              solicitacoes.map((solicitacao) => (
                <Col span={20} key={solicitacao.nomeEmpresa}>
                  <Solicitacao
                    id={solicitacao.id}
                    nomeEmpresa={solicitacao.nomeEmpresa}
                    cnpjEmpresa={solicitacao.cnpj}
                    valorSolicitado={solicitacao.valorSolicitado}
                  />
                </Col>
              ))
            ) : (
              <Typography.Text>Não existem solicitações</Typography.Text>
            )}
          </Row>
        </Col>
      </Row>
    </LayoutDefault>
  );
};

export default Home;
