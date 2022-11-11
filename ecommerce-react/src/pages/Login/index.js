import "./index.css";
const Login = () =>{

    const logar = () =>{
        window.open("/", "_self");
    };

    return (
        <div className="box-login">
            <h1>Login</h1>
            <label for="email"></label>
            <input id="email" type="text"/>
            <br/><br/>  
            <label for="senha"></label>
            <input id="senha" type="password"/>
            <br/>
            <button id="btn-entrar" onClick={logar} type="button">Entrar</button>
        </div>
    )
}

export default Login;