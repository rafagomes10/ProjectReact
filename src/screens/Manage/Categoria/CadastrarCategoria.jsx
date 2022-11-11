import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const CreateCategoria = () => {
  const [id, setId] = useState();
  const[descricao,setDescricao] = useState("");
  const[nome,setNome] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();
    try {
      api.post("/categoria", {
        id: 0,
        descricao,        
        nome,});
    
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="centralizar"> Adicionar Categoria <i class="bi bi-plus-circle"></i></h2>
      <div className="meio">

      <Form onSubmit={(e) => cadastrar(e)}>
        <Form.Group>
          <Form.Label>Descrição</Form.Label>
                  <Form.Control
                      value={descricao}
                      type="text"
                      onChange={(e) => {
                        setDescricao(e.target.value);
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
                <br></br>  
        </Form.Group>
        <Button type="submit">Cadastrar</Button>
      </Form>
      </div>
    </>
  );
};
export default CreateCategoria;