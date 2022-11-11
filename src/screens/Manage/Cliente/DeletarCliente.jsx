import {useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {api} from "../../../api";


export const DeleteCliente = () => {
  const [listaClientes, setListaClientes] = useState([]);
  const [id, setId] = useState();
  
  

    useEffect(() =>{
    const getClientes = async () => {
      try{
        const response = await api.get("/cliente");
        setListaClientes(response.data)
        
      }catch(err){
        console.log(err);
      }
    }
    getClientes()
  },[])

  console.log(listaClientes);

    const deletar = (e) => {
      e.preventDefault();
      try {
        api.delete(`/cliente/${id}`, {  
          });
      
      } catch (err) {
        console.log(err);
      }
      };

  return (
    <>
      <h2 className="centralizar" >Deletar Cliente <i class="bi bi-x-circle"></i></h2>
      <div className="meio">
      <Form onSubmit={(e) => deletar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaClientes.map((d) => {
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
export default DeleteCliente;
 