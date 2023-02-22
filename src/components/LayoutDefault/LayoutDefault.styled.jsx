import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0;

  @media only screen and (max-device-width: 720px) {
    padding: 20px 0;
  }
`;

export const BoxLayout = styled.div`
  box-sizing: border-box;
  width: 700px;
  min-height: 600px;
  border: 1px solid #ececec;
  border-radius: 5px;
  padding: 30px;
  @media only screen and (max-device-width: 720px) {
    width: 100%;
    border: 0px;
  }
`;
