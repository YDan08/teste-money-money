import { Button } from 'antd';
import styled from 'styled-components';

export const BotaoForm = styled(Button)`
  background-color: #ff6600;
  color: #ffff;
  && {
    :hover {
      color: #ffff;
      background-color: #fb802f;
      border: 0px;
    }
  }
`;
export default BotaoForm;
