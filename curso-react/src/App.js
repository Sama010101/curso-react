import './App.css';
import SayMyName from './components/SayMyName'; 
import Pessoa from './components/Pessoa'; 

function App() {

  var nomes= ["Samuel", "Maria", "João"];
  return (
    <div className="App">

      <SayMyName name={nomes[0]} />
      <SayMyName name={nomes[1]} />
      <SayMyName name={nomes[2]} />
      <Pessoa 
      nome="Samuel" 
      idade="21" 
      profissão="Programador" 
      foto="https://via.placeholder.com/150"
      />

    </div>
     
  );
} 

export default App;
