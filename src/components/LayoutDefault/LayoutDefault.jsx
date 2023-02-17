/* eslint-disable react/prop-types */
import { BoxLayout, Container } from './LayoutDefault.styled';

export const LayoutDefault = ({ children }) => {
  return (
    <Container>
      <BoxLayout>{children}</BoxLayout>
    </Container>
  );
};

export default LayoutDefault;
