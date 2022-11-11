import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const CreateCliente = () => {
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
  
  const formatDataTime = (e) => {
    let data = e.target.value;
    data = new Date (data).toISOString();
    setDataNascimento(data);
  }

  const receiveDataTime = () => {
    let data = dataNascimento;
    console.log(data);
    data = new Date(data).toLocaleDateString();
    setDataNascimento(data)
  }

  const cadastrar = (e) => {
    e.preventDefault();
    try {
      api.post("/cliente", {
        id:0,
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
      <h2 className="centralizar">Adicionar Cliente <i class="bi bi-plus-circle"></i></h2>
      <div className="meio">
      <Form onSubmit={(e) => cadastrar(e)}>
        <Form.Group>
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
                        onChange={formatDataTime}    
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
        <Button type="submit">Cadastrar</Button>
      </Form>
      </div>
    </>
  );
};
export default CreateCliente;