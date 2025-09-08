import Button from './events/Button';

function Evento(){


    function meuEvento(){
        console.log(`fui ativado event0`)
    }
    function favoritaEvento(){
        console.log(`fui ativado favorita`)
    }
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={favoritaEvento} text="Favoritar Evento"/>
        </div>
    )

}

export default Evento;