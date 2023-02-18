import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LayoutDefault from '../../components/LayoutDefault';
import Categoria from '../../components/Categoria';
import TituloCategoria from '../../components/TituloCategoria';
import Info from '../../components/Info';
import { api } from '../../utils/api';
import { BotaoEditar } from './Details.styled';

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
          <TituloCategoria>{solicitacao.nomeEmpresa}</TituloCategoria>
          <Button danger type="primary" icon={<DeleteOutlined />}>
            Remover Solicitação
          </Button>
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
          <BotaoEditar>
            Deseja editar solicitação? Clique para editar
          </BotaoEditar>
        </Col>

        <Categoria>
          <TituloCategoria>Endereço</TituloCategoria>
        </Categoria>
        <Col span={20}>
          {/*    <Info
            categoria="Endereço"
            valor={`${solicitacao.endereco.rua}, ${solicitacao.endereco.numero} - Pinheiros, ${solicitacao.endereco.cidade} - ${solicitacao.endereco.estado}`}
          />
          <Info categoria="CEP" valor={solicitacao.endereco.cep} /> */}
        </Col>

        <Categoria>
          <TituloCategoria>Contato</TituloCategoria>
        </Categoria>
        <Col span={20}>
          <Info categoria="Nome" valor={solicitacao.nomeResponsavel} />
          <Info categoria="CPF" valor={solicitacao.cnpj} />
          <Info categoria="Telefone" valor={solicitacao.telefone} />
          <Info categoria="Email" valor={solicitacao.email} />
        </Col>
      </Row>
    </LayoutDefault>
  );
};

export default Details;
