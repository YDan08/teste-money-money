import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Col, message, Popconfirm, Row, Typography } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Não foi possível remover a solicitação',
    });
  };

  useEffect(() => {
    (async () => {
      const dados = await api.get(`/solicitacoes/${state.id}`);
      setSolicitacao(dados.data);
    })();
  }, []);

  const excluirSolicitacao = async () => {
    try {
      await api.delete(`/solicitacoes/${state.id}`);
      navigate('/');
    } catch (e) {
      error();
    }
  };

  return (
    <LayoutDefault>
      {contextHolder}
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
          <Typography.Title level={3}>Detalhes</Typography.Title>
        </Col>

        <Categoria>
          <TituloCategoria>{solicitacao.nomeEmpresa}</TituloCategoria>
          <Popconfirm
            title="Excluir solicitação"
            description="Você deseja remover essa solicitação?"
            okText="Sim"
            cancelText="Não"
            onConfirm={excluirSolicitacao}
            placement="bottom"
            okButtonProps={{ danger: true }}
          >
            <Button danger type="primary" icon={<DeleteOutlined />}>
              Remover Solicitação
            </Button>
          </Popconfirm>
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
          <BotaoEditar
            onClick={() =>
              navigate('/edit-solicitacao', { state: { id: state.id } })
            }
          >
            Deseja editar solicitação? Clique para editar
          </BotaoEditar>
        </Col>

        <Categoria>
          <TituloCategoria>Endereço</TituloCategoria>
        </Categoria>
        <Col span={20}>
          <Info
            categoria="Endereço"
            valor={`${solicitacao.rua}, ${solicitacao.numero} - ${solicitacao.bairro}, ${solicitacao.cidade} - ${solicitacao.estado}`}
          />
          <Info categoria="CEP" valor={solicitacao.cep} />
        </Col>

        <Categoria>
          <TituloCategoria>Contato</TituloCategoria>
        </Categoria>
        <Col span={20}>
          <Info categoria="Nome" valor={solicitacao.nomeResponsavel} />
          <Info categoria="CPF" valor={solicitacao.cpf} />
          <Info categoria="Telefone" valor={solicitacao.telefone} />
          <Info categoria="Email" valor={solicitacao.email} />
        </Col>
      </Row>
    </LayoutDefault>
  );
};

export default Details;
