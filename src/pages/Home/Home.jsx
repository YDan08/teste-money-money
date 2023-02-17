import { Avatar, Badge, Button, Col, Row, Typography } from 'antd';
import { BellOutlined, PlusOutlined } from '@ant-design/icons';
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

export const Home = () => {
  return (
    <LayoutDefault>
      <Row justify="center" gutter={[0, 12]}>
        <Col span={20}>
          <Row justify="space-between" align="middle">
            <ColUser span={20}>
              <Avatar size={64} src={foto} />
              <InfoUser>
                <Typography.Text>Seja bem-vindo</Typography.Text>
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
            <IconButton icon={<PlusOutlined />} />
          </DivOportunidade>
          <InputSearch placeholder="input search text" />
        </Col>
      </Row>
    </LayoutDefault>
  );
};

export default Home;
