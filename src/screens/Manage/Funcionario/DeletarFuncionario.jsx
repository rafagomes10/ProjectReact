import {useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {api} from "../../../api";
import './Style.css';


export const DeleteFuncionario = () => {
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

    const deletar = (e) => {
      e.preventDefault();
      try {
        api.delete(`/funcionario/${id}`, {  
          cpf,
          nome:nome});
      
      } catch (err) {
        console.log(err);
      }
      };

  return (
    <>
      <h2 className="centralizar"> Deletar Funcionário <i class="bi bi-x-circle"></i></h2>
      <div className="meio">
      <Form onSubmit={(e) => deletar(e)}>
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
        </Form.Group>
          <br></br>
        <Button type="submit">Deletar</Button>
      </Form>
      </div>
    </>
  );
};
export default DeleteFuncionario;
 