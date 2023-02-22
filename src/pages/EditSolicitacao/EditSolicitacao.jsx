import { Button, Col, Form, Input, message, Row, Typography } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import Categoria from '../../components/Categoria';
import LayoutDefault from '../../components/LayoutDefault';
import TituloCategoria from '../../components/TituloCategoria';
import BotaoForm from '../../components/BotaoForm';
import { api } from '../../utils/api';
import routes from '../../utils/routes';
import {
  formatCEPInput,
  formatCNPJInput,
  formatCPFInput,
  formatTelefoneInput,
} from '../../utils/formats';
import {
  validatorCEP,
  validatorCNPJ,
  validatorCPF,
  validatorEmail,
  validatorTelefone,
} from '../../utils/validators';

export const EditSolicitacao = () => {
  const [form] = Form.useForm();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Solicitação atualizada com sucesso',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Não foi possível atualizar a solicitação',
    });
  };

  useEffect(() => {
    if (!state?.id) {
      navigate(routes.home);
    }

    (async () => {
      try {
        const dados = await api.get(`/solicitacoes/${state?.id}`);
        form.setFieldsValue(dados.data);
      } catch (e) {
        navigate(routes.home);
      }
    })();
  }, []);

  const editarSolicitacao = async (dados) => {
    try {
      await api.put(`/solicitacoes/${state.id}`, dados);
      success();
    } catch (e) {
      error();
    }
  };

  const cnpj = Form.useWatch('cnpj', form);
  const telefone = Form.useWatch('telefone', form);
  const cpf = Form.useWatch('cpf', form);
  const cep = Form.useWatch(['endereco', 'cep'], form);

  useEffect(() => {
    if (cnpj != null && cnpj.length > 0) {
      form.setFieldValue('cnpj', formatCNPJInput(cnpj));
    }
    if (telefone != null && telefone.length > 0) {
      form.setFieldValue('telefone', formatTelefoneInput(telefone));
    }
    if (cep != null && cep.length > 0) {
      form.setFieldValue(['endereco', 'cep'], formatCEPInput(cep));
    }
    if (cpf != null && cpf.length > 0) {
      form.setFieldValue('cpf', formatCPFInput(cpf));
    }
  }, [cnpj, telefone, cep, cpf]);

  return (
    <LayoutDefault>
      {contextHolder}
      <Form
        layout="vertical"
        form={form}
        onFinish={editarSolicitacao}
        requiredMark={false}
      >
        <Row justify="center">
          <Col span={20}>
            <Link to={routes.details} state={{ id: state?.id }}>
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
            <Typography.Title level={3}>Editar solicitação</Typography.Title>
          </Col>

          <Categoria>
            <TituloCategoria>Empresa</TituloCategoria>
          </Categoria>
          <Col span={20}>
            <Form.Item
              label="Nome da empresa"
              name="nomeEmpresa"
              rules={[
                { required: true, message: 'O nome da empresa é obrigatório' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Faturamento anual"
              name="faturamentoAnual"
              rules={[
                {
                  required: true,
                  message: 'O faturamento anual é obrigatório',
                },
              ]}
            >
              <Input prefix="R$" type="number" />
            </Form.Item>
            <Form.Item
              label="Valor solicitado"
              name="valorSolicitado"
              rules={[
                { required: true, message: 'O valor solicitado é obrigatório' },
              ]}
            >
              <Input prefix="R$" type="number" />
            </Form.Item>
            <Form.Item
              label="CNPJ"
              name="cnpj"
              rules={[
                { required: true, message: 'O CNPJ é obrigatório' },
                { validator: async (_, value) => await validatorCNPJ(value) },
              ]}
            >
              <Input maxLength={18} />
            </Form.Item>
          </Col>

          <Categoria>
            <TituloCategoria>Endereço</TituloCategoria>
          </Categoria>
          <Col span={20}>
            <Form.Item
              label="CEP"
              name={['endereco', 'cep']}
              rules={[{ validator: async (_, value) => validatorCEP(value) }]}
            >
              <Input maxLength={9} />
            </Form.Item>
            <Row justify="space-between" gutter={8}>
              <Col span={16}>
                <Form.Item label="Rua" name={['endereco', 'rua']}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Número" name={['endereco', 'numero']}>
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Bairro" name={['endereco', 'bairro']}>
              <Input />
            </Form.Item>
            <Row justify="space-between" gutter={8}>
              <Col span={16}>
                <Form.Item label="Cidade" name={['endereco', 'cidade']}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Estado" name={['endereco', 'estado']}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Categoria>
            <TituloCategoria>Contato</TituloCategoria>
          </Categoria>
          <Col span={20}>
            <Form.Item label="Nome completo" name="nomeResponsavel">
              <Input />
            </Form.Item>
            <Form.Item
              label="Telefone de contato"
              name="telefone"
              rules={[
                { validator: async (_, value) => validatorTelefone(value) },
              ]}
            >
              <Input maxLength={15} type="tel" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  validator: async (_, value) => await validatorEmail(value),
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="CPF"
              name="cpf"
              rules={[
                {
                  validator: async (_, value) => await validatorCPF(value),
                },
              ]}
            >
              <Input maxLength={14} />
            </Form.Item>
          </Col>

          <Col span={20}>
            <BotaoForm block htmlType="submit">
              Editar
            </BotaoForm>
          </Col>
        </Row>
      </Form>
    </LayoutDefault>
  );
};

export default EditSolicitacao;
