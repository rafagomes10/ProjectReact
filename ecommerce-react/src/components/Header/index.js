import "./index.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    if(useLocation().pathname == "/login"){
        return (<></>);
    }

    return (
        <ul>
            <li><Link className="active" to={'/'} >Dashboard</Link></li>
            <li><Link to={'/usuario'} >Usuarios</Link></li>
            <li><Link to={'/cliente'} >Clientes</Link></li>
            <li><Link to={'/relatorio'}>Relatorios</Link></li>
            <li><Link to={'/login'} >Sair</Link></li>
        </ul>
    )
}

export default Header;