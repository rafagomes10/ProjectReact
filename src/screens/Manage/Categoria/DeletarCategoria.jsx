import {useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {api} from "../../../api";
import './Style.css';

export const DeleteCategoria = () => {
  const [listaCategorias, setListaCategorias] = useState([]);
  const [id, setId] = useState();
  const[nome,setNome] = useState("");
  
    useEffect(() =>{
    const getCategorias = async () => {
      try{
        const response = await api.get("/categoria");
        setListaCategorias(response.data)
      
      }catch(err){
        console.log(err);
      }
    }
    getCategorias()
  },[])

  console.log(listaCategorias);

    const deletar = (e) => {
      e.preventDefault();
      try {
        api.delete(`/categoria/${id}`, {  
          descricao,        
          nome,});
           
      } catch (err) {
        console.log(err);
      }
      };

  return (
    <>
      <h2 className="centralizar">Deletar Categoria <i class="bi bi-x-circle"></i></h2>
      <div className="meio">
      <Form onSubmit={(e) => deletar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaCategorias.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option>
              );
            })}
          </Form.Control>
          <br></br>
        </Form.Group>

        <Button type="submit">Deletar</Button>
      </Form>
      </div>
    </>
  );
};
export default DeleteCategoria;
 