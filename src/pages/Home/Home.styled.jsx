import { Button, Col, Input, Typography } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

export const ColUser = styled(Col)`
  display: flex;
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const IconButton = styled(Button)`
  border-radius: 50%;
  background-color: #ff6600;
`;

export const DivOportunidade = styled.div`
  display: flex;
  align-items: center;
`;

export const Titulo = styled(Typography.Title)`
  && {
    text-align: center;
    margin: 0px 4px 0px 0px;
  }
`;

export const InputSearch = styled(Search)`
  margin-top: 16px;
`;
