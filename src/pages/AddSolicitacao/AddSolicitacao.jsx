import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import LayoutDefault from '../../components/LayoutDefault';
import Categoria from '../../components/Categoria';
import TituloCategoria from '../../components/TituloCategoria';

export const AddSolicitacao = () => {
  return (
    <LayoutDefault>
      <Form layout="vertical">
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
            <Typography.Title level={4}>
              Adicionar nova solicitação
            </Typography.Title>
          </Col>

          <Categoria>
            <TituloCategoria>Empresa</TituloCategoria>
          </Categoria>
          <Col span={20}>
            <Form.Item label="Nome da empresa">
              <Input />
            </Form.Item>
            <Form.Item label="Faturamento anual">
              <Input />
            </Form.Item>
            <Form.Item label="Valor solicitado">
              <Input />
            </Form.Item>
          </Col>

          <Categoria>
            <TituloCategoria>Endereço</TituloCategoria>
          </Categoria>
          <Col span={20}>
            <Form.Item label="CEP">
              <Input />
            </Form.Item>
            <Row justify="space-between" gutter={8}>
              <Col span={16}>
                <Form.Item label="Rua">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Número">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Bairro">
              <Input />
            </Form.Item>
            <Row justify="space-between" gutter={8}>
              <Col span={16}>
                <Form.Item label="Cidade">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Estado">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Categoria>
            <TituloCategoria>Contato</TituloCategoria>
          </Categoria>
          <Col span={20}>
            <Form.Item label="Nome completo">
              <Input />
            </Form.Item>
            <Form.Item label="Telefone de contato">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Form.Item label="CPF">
              <Input />
            </Form.Item>
          </Col>

          <Col span={20}>
            <Button block>Criar nova solicitação</Button>
          </Col>
        </Row>
      </Form>
    </LayoutDefault>
  );
};

export default AddSolicitacao;
