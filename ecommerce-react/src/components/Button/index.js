import './index.css';

// 1° forma de criar componente, a masi antiga e menos utilizada hoje em dia.
/*
export default class Button extends React.Component{
}


// 2° é uma das formas mais utilizadas.
const Button = () => {

}

// 3° é a forma mais atual de criar componentes em React
function Button(){

}
*/

const Button = (props) => {

    return (
        <button onClick={props.executar} type="button">{props.valor}</button>
    )
}
   


  
       
    
    



export default Button;