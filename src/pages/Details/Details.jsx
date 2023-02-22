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
import routes from '../../utils/routes';
import intl from '../../utils/intl';

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
      try {
        const dados = await api.get(`/solicitacoes/${state.id}`);
        setSolicitacao(dados.data);
      } catch (e) {
        navigate(routes.home);
      }
    })();

    if (!state?.id) {
      navigate(routes.home);
    }
  }, []);

  const excluirSolicitacao = async () => {
    try {
      await api.delete(`/solicitacoes/${state.id}`);
      navigate(routes.home);
    } catch (e) {
      error();
    }
  };

  return (
    <LayoutDefault>
      {contextHolder}
      <Row justify="center">
        <Col span={20}>
          <Link to={routes.home}>
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
            valor={intl.format(solicitacao.valorSolicitado)}
          />
          <Info
            categoria="Faturamento anual"
            valor={intl.format(solicitacao.faturamentoAnual)}
          />
          <BotaoEditar
            onClick={() =>
              navigate(routes.editSolicitacao, { state: { id: state.id } })
            }
          >
            Deseja editar solicitação? Clique para editar
          </BotaoEditar>
        </Col>

        {solicitacao.endereco &&
          Object.keys(solicitacao.endereco).length !== 0 && (
            <>
              <Categoria>
                <TituloCategoria>Endereço</TituloCategoria>
              </Categoria>
              <Col span={20}>
                <Info
                  categoria="Endereço"
                  valor={`${
                    solicitacao.endereco.rua
                      ? `${solicitacao.endereco.rua}, `
                      : ''
                  }${
                    solicitacao.endereco.numero
                      ? `${solicitacao.endereco.numero} - `
                      : ''
                  }${
                    solicitacao.endereco.bairro
                      ? `${solicitacao.endereco.bairro}, `
                      : ''
                  }, ${
                    solicitacao.endereco.cidade
                      ? `${solicitacao.endereco.cidade} - `
                      : ''
                  }${solicitacao.endereco.estado ?? ''}`}
                />
                <Info categoria="CEP" valor={solicitacao.endereco.cep ?? ''} />
              </Col>
            </>
          )}

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
