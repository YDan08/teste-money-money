import { Button, Col, Input, Typography } from 'antd';
import styled from 'styled-components';

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
  background-color: #ff6600;
  color: white;
  && {
    :hover {
      color: white;
      background-color: #fe7f2b;
      border: 0px;
    }
  }
`;

export const DivOportunidade = styled.div`
  display: flex;
  align-items: center;
`;

export const Titulo = styled(Typography.Title)`
  display: flex;

  && {
    text-align: center;
    margin: 0px 4px 0px 0px;
  }
`;

export const InputSearch = styled(Input)`
  margin-top: 16px;
  color: #d9d9d9;
  && {
    :hover {
      border-color: #ff6600;
    }
  }
`;
