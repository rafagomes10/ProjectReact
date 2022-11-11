import styled from "styled-components";

export const Botao = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  font-size: ${(props) => props.fontSize};
  &:hover {
    cursor: pointer;
  }
`;
