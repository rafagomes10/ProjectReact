import "./index.css";


// Isso é um componente
function Card(props){

    return ( // JSX
        <div className="card">
          <h1>{props.texto}</h1>
          <p>{props.subtitulo }</p>
        </div>
    );
}

export default Card;