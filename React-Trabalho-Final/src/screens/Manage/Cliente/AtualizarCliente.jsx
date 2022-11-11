import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import './Style.css';

export const UpdateCliente = () => {
     
    const [listaClientes, setListaClientes] = useState([]);
    const [id, setId] = useState();
    const[cpf,setCPF] = useState("");
    const[dataNascimento,setDataNascimento] = useState("");
    const[email,setEmail] = useState("");
    const[bairro,setBairro] = useState("");
    const[cep,setCep] = useState("");
    const[cidade,setCidade] = useState("");
    const[complemento,setComplemento] = useState("");
    const[estado,setEstado] = useState("");
    const[numero,setNumero] = useState("");
    const[rua,setRua] = useState("");
    const[nome,setNome] = useState("");
    const[usuario,setUsuario] = useState("");
   
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

    const atualizar = (e) => {
      e.preventDefault();
      try {
        api.put(`/cliente/${id}`, {  
          cpf,
          dataNascimento,
          email,
          endereco:{
              bairro,
              cep, 
              cidade,
              complemento,
              estado,
              numero,
              rua
           },
           nome,
           usuario});
      
      } catch (err) {
        console.log(err);
      }
      };

  return (
    <>
      <h2 className="centralizar">Atualizar Cliente <i class="bi bi-arrow-repeat"></i></h2>
      <div className="meio">
      <Form onSubmit={(e) => atualizar(e)}>
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

          <Form.Label>CPF</Form.Label>
                  <Form.Control
                      value={cpf}
                      type="text"
                      onChange={(e) => {
                        setCPF(e.target.value);
                      }}
                    />

                  <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control
                        value={dataNascimento}
                        type="date"
                        onChange={(e) =>  {
                        setDataNascimento(e.target.value);
                        }}       
                    />
                  <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        type="text"
                        onChange={(e) =>  {
                        setEmail(e.target.value);
                        }}       
                    />
                
            </Form.Group>
            <Form.Group>
                    
                    <Form.Label>Bairro</Form.Label>
                    
                        <Form.Control
                        value={bairro}
                        type="text"
                        onChange={(e) =>  {
                        setBairro(e.target.value);
                        }}       
                    />
                    <Form.Label>CEP</Form.Label>
                    
                        <Form.Control
                        value={cep}
                        type="text"
                        onChange={(e) =>  {
                        setCep(e.target.value);
                        }}       
                    />
                    <Form.Label>Cidade</Form.Label>
                    
                    <Form.Control
                    value={cidade}
                    type="text"
                    onChange={(e) =>  {
                    setCidade(e.target.value);
                    }}       
                />
                    <Form.Label>Complemento</Form.Label>
                    
                    <Form.Control
                    value={complemento}
                    type="text"
                    onChange={(e) =>  {
                    setComplemento(e.target.value);
                    }}       
                />
                 <Form.Label>Estado</Form.Label>
                    
                    <Form.Control
                    value={estado}
                    type="text"
                    onChange={(e) =>  {
                    setEstado(e.target.value);
                    }}       
                />
                <Form.Label>Número</Form.Label>
                    
                    <Form.Control
                    value={numero}
                    type="text"
                    onChange={(e) =>  {
                    setNumero(e.target.value);
                    }}       
                />
                <Form.Label>Rua</Form.Label>
                    
                    <Form.Control
                    value={rua}
                    type="text"
                    onChange={(e) =>  {
                    setRua(e.target.value);
                    }}       
                />


            </Form.Group>

            <Form.Group>
              <Form.Label>Nome</Form.Label>
                    
                    <Form.Control
                    value={nome}
                    type="text"
                    onChange={(e) =>  {
                    setNome(e.target.value);
                    }}       
                />

              <Form.Label>Usuário</Form.Label>
                    
                        <Form.Control
                        value={usuario}
                        type="text"
                        onChange={(e) =>  {
                        setUsuario(e.target.value);
                        }}       
                    />   
          <br></br>
        </Form.Group>
        <Button type="submit">Atualizar</Button>
      </Form>
      </div>
    </>
  );
};

export default UpdateCliente;