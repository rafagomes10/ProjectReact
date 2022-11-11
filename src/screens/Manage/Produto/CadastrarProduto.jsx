import { useEffect,useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import './Style.css';

export const CreateProduto = () => {
  const [id, setId] = useState();
  const[nome,setNome] = useState("");
  const[dataFabricacao,setDataFabricacao] = useState("");
  const[descricao,setDescricao] = useState("");
  const[fotoLink,setFotoLink] = useState("");
  const[qtdEstoque,setQTDEstoque] = useState();
  const[valor,setValor] = useState();
  const[idCategoria,setIdCategoria] = useState();
  const[idFuncionario,setIdFuncionario] = useState();
  const[nomeCategoria,setNomeCategoria] = useState("");
  const[nomeFuncionario,setNomeFuncionario] = useState("");
  

  const cadastrar = (e) => {
    e.preventDefault();
    try {
      api.post("/produto", {
          dataFabricacao,
          descricao,
          fotoLink,
          id:0,
          idCategoria,
          idFuncionario,
          nome,
          nomeCategoria,
          nomeFuncionario,
          qtdEstoque,
          valor});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="centralizar">Adicionar Produtos <i class="bi bi-plus-circle"></i></h2>
      <div className="meio">
      <Form onSubmit={(e) => cadastrar(e)}>
        <Form.Group>                      
            <Form.Label>Data de Fabricacao</Form.Label>
                  <Form.Control
                      value={dataFabricacao}
                      type="date"
                      onChange={(e) => {
                        setDataFabricacao(e.target.value);
                      }}
                    />

                  <Form.Label>Descricao</Form.Label>
                    <Form.Control
                        value={descricao}
                        type="text"
                        onChange={(e) =>  {
                        setDescricao(e.target.value);
                        }}       
                    />
                  <Form.Label>Insira o link da foto do produto</Form.Label>
                    <Form.Control
                        value={fotoLink}
                        type="text"
                        onChange={(e) =>  {
                        setFotoLink(e.target.value);
                        }}       
                    />
                
            </Form.Group>
            <Form.Group>
                    
                    <Form.Label>Insira o id da Categoria</Form.Label>
                    
                        <Form.Control
                        value={idCategoria}
                        type="number"
                        onChange={(e) =>  {
                        setIdCategoria(e.target.value);
                        }}       
                    />
                    <Form.Label>Insira o id do Funcionario</Form.Label>
                    
                        <Form.Control
                        value={idFuncionario}
                        type="number"
                        onChange={(e) =>  {
                        setIdFuncionario(e.target.value);
                        }}       
                    />
                    <Form.Label>Quantidade em Estoque</Form.Label>
                    
                    <Form.Control
                    value={qtdEstoque}
                    type="number"
                    onChange={(e) =>  {
                    setQTDEstoque(e.target.value);
                    }}       
                />
                    <Form.Label>Valor</Form.Label>
                    
                    <Form.Control
                    value={valor}
                    type="number"
                    onChange={(e) =>  {
                    setValor(e.target.value);
                    }}       
                />
                 <Form.Label>Nome da Categoria</Form.Label>
                    
                    <Form.Control
                    value={nomeCategoria}
                    type="text"
                    onChange={(e) =>  {
                    setNomeCategoria(e.target.value);
                    }}       
                />
                <Form.Label>Nome do Funcionario</Form.Label>
                    
                    <Form.Control
                    value={nomeFuncionario}
                    type="text"
                    onChange={(e) =>  {
                    setNomeFuncionario(e.target.value);
                    }}       
                />

              <Form.Label>Nome do Produto</Form.Label>
                    
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
export default CreateProduto;