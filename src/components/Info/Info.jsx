import { DivInfo, TextCategoria, TextValor } from './Info.styled';

export const Info = ({ categoria, valor }) => {
  return (
    <DivInfo>
      <TextCategoria>{categoria}</TextCategoria>
      <TextValor>{valor}</TextValor>
    </DivInfo>
  );
};

export default Info;
