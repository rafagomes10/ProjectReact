import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import './Style.css';

export const UpdateFuncionario = () => {
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    const [id, setId] = useState();
    const[cpf,setCPF] = useState("");
    const[nome,setNome] = useState("");

    useEffect(() =>{
    const getFuncionarios = async () => {
      try{
        const response = await api.get("/funcionario");
        setListaFuncionarios(response.data)
      }catch(err){
        console.log(err);
      }
    }
    getFuncionarios()
  },[])

  console.log(listaFuncionarios);

    const atualizar = (e) => {
      e.preventDefault();
      try {
        api.put(`/funcionario/${id}`, {  
          cpf,        
          nome:nome,
          });
        
      } catch (err) {
        console.log(err);
      }};

  return (
    <>
      <h2 className="centralizar">Atualizar Funcionário <i class="bi bi-arrow-repeat"></i></h2>
      <div className="meio">
      <Form onSubmit={(e) => atualizar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaFuncionarios.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option> 
              );
            })}
          </Form.Control>
          <Form.Label>CPF</Form.Label>
                  <Form.Control
                      value={cpf}
                      type="text"
                      onChange={(e) => {
                        setCPF(e.target.value);
                      }}
                    />
              <Form.Label>Nome</Form.Label>                 
                    <Form.Control
                    value={nome}
                    type="text"
                    onChange={(e) =>  {
                    setNome(e.target.value);
                    }}       
                />
        </Form.Group>
        <br></br>
        <Button type="submit">Atualizar</Button>
      </Form>
      </div>
    </>
  );
};
export default UpdateFuncionario;