import Frase from "./Frase";

function HelloWorld(){

const titulo = "Hello World";

const mensagem = "Meu primeiro componente"; 

mensagem.toUpperCase();

    return(

        <div> 
            <Frase />
            <h1>{titulo}</h1>
            <p>{mensagem}</p>
            <Frase />
        </div>
    )
}

export default HelloWorld;