import { Button } from 'antd';
import styled from 'styled-components';

export const BotaoEditar = styled(Button)`
  background: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  margin-bottom: 12px;
  && {
    :hover {
      background: #f8e9ba;
      border: 1px solid #ffeeba;
      color: #856404;
    }
  }
`;
