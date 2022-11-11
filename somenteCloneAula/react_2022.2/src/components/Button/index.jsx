import { Botao } from "./styles";

export const Button = (props) => {
  return (
    <Botao
      fontSize={props.fontSize}
      backgroundColor={props.backgroundColor}
      padding={props.padding}
      onClick={props.onClick}
    >
      {props.name}
    </Botao>
  );
};
