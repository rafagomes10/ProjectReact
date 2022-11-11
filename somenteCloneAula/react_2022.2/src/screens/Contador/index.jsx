import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>{contador}</h1>
      <Button
        onClick={() => setContador((prev) => prev + 1)}
        backgroundColor="green"
        fontSize={40}
        padding="10px"
        name="+"
      />
      <Button
        onClick={() => setContador((prev) => prev - 1)}
        backgroundColor="red"
        fontSize={80}
        padding="10px"
        name="-"
      />
      <Link to="/">Voltar</Link>
    </>
  );
};
