import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container.jsx";
import { SaudacaoUsuario } from "../../components/SaudacaoUsuario";
import { SaudacaoVisitante } from "../../components/SaudacaoVisitante";

export const Home = () => {
  const [logado, setLogado] = useState(false);

  return (
    <Container>
      {logado ? <SaudacaoUsuario /> : <SaudacaoVisitante />}
      <Button
        onClick={() => setLogado((prev) => !prev)}
        backgroundColor="pink"
        fontSize={100}
        padding="10px"
        name={logado ? "Logoff" : "Login"}
      />
      <Link to="/contador">Contador</Link>
    </Container>
  );
};
