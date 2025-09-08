import{ useState} from 'react';

function Form (){
    function cadastrarUsuário(e){
        e.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`);
    }

    const[name, setName] = useState();  
    const[password, setPassword] = useState();

    return(
        <div>
            <h1>Formulário</h1>
            <form onSubmit={cadastrarUsuário}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite seu nome" 
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                 <div>
                    <label htmlFor="email">Senha:</label>
                    <input 
                    type="password" 
                    id= "password" 
                    name="password" 
                    placeholder="Digite sua senha" 
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Form;