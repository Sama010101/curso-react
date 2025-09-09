function Saudacao({nome}) {


    function gerarSaudacao(algumNome){
      return `Saudações ${algumNome}, tudo bem?`;
    }
  return (
    <> 
    {nome && 
        <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}
export default Saudacao;