import { Link } from 'react-router-dom'

import './Manage.css';
export const Manage = () => {
    return (
        <div className='card-box'>
            <h2 className='posicao'><i class="bi bi-gear">Gerenciamento</i></h2>

                <div className='gerenciar'>
                <strong>Cliente</strong>
                <br/> 
                <span>Gerenciar Clientes</span>
                <p>Aqui você pode adicionar, remover, ou deletar registros de clientes.</p>         
                <Link to="/CadastrarCliente"><button>Criar</button></Link>
                <Link to="/AtualizarCliente"><button>Atualizar</button></Link>
                <Link to="/DeletarCliente"><button>Deletar</button></Link>
                </div>  

                <div className='gerenciar'>
                <strong>Funcionário</strong>
                <br/>
                <span>Gerenciar Funcionários</span>
                <p>Aqui você pode adicionar, remover, ou deletar registros de funcionários.</p>
                <Link to="/CadastrarFuncionario"><button>Criar</button></Link>
                <Link to="/AtualizarFuncionario"><button>Atualizar</button></Link>
                <Link to="/DeletarFuncionario"><button>Deletar</button></Link>
                </div>

                <div className='gerenciar'>
                <strong>Produtos</strong>
                <br/>
                <span>Gerenciar Produtos</span>
                <p>Aqui você pode adicionar, remover, ou deletar registros de produtos.</p>
                <Link to="/CadastrarProduto"><button>Criar</button></Link>
                <Link to="/AtualizarProduto"><button>Atualizar</button></Link>
                <Link to="/DeletarProduto"><button>Deletar</button></Link>
                </div>
                
                <div className='gerenciar'>
                <strong>Categoria</strong>
                <br/>
                <span>Gerenciar Categorias</span>
                <p>Aqui você pode adicionar, remover, ou deletar registros de categorias.</p>
                <Link to="/CadastrarCategoria"><button>Criar</button></Link>
                <Link to="/AtualizarCategoria"><button>Atualizar</button></Link>
                <Link to="/DeletarCategoria"><button>Deletar</button></Link>  
                </div>
        </div>    
    );
}