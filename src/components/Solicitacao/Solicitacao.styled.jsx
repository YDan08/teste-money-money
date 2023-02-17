import { Button, Typography } from 'antd';
import styled from 'styled-components';

export const ContainerSolicitacao = styled.div`
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  padding: 8px 0px;
  margin: 24px 0px;
`;

export const DadosSolicitacao = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const TituloEmpresa = styled(Typography.Text)`
  && {
    font-weight: 500;
    font-size: 17px;
  }
`;

export const CnpjEmpresa = styled(Typography.Text)`
  && {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const ValorSolicitado = styled(Typography.Text)`
  && {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const BotaoSeta = styled(Button)`
  border-radius: 50%;
  background-color: #ff6600;
  margin-right: 20px;
  color: white;
  && {
    :hover {
      color: black;
      background-color: #ff6600;
      border: 0px;
    }
  }
`;
